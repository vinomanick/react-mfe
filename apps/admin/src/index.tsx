import { mountReactApp } from './main';
import indexStyle from './index.css?inline';
import { Root } from 'react-dom/client';

class AdminMFE extends HTMLElement {
  root!: Root;
  constructor() {
    super();
    // write element functionality in here
  }

  connectedCallback() {
    console.debug('Admin MFE element added to app');
    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('id', 'admin-mfe');
    mountPoint.style.height = '100%';
    mountPoint.style.overflow = 'auto';
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    this.addStyles();
    const props: Record<string, any> = this.getProps(this.attributes);
    this.root = mountReactApp({ element: mountPoint, options: props.options });
  }

  addStyles() {
    const id = 'admin-style';
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(indexStyle));
    this.shadowRoot?.appendChild(style);
  }

  getProps(attributes: NamedNodeMap) {
    return [...attributes]
      .filter((attr) => attr.name !== 'style')
      .map((attr) => this.convert(attr.name, attr.value))
      .reduce((props, prop) => ({ ...props, [prop.name]: prop.value }), {});
  }

  convert(attrName: string, attrValue: any) {
    let value: any = attrValue;
    if (attrValue === 'true' || attrValue === 'false') {
      value = attrValue === 'true';
    } else if (!isNaN(attrValue) && attrValue !== '') {
      value = +attrValue;
    } else if (/^{.*}/.exec(attrValue)) {
      value = JSON.parse(attrValue);
    }
    return { name: attrName, value: value };
  }

  disconnectedCallback() {
    console.debug('Admin MFE element removed from page.');
    this.root?.unmount();
  }

  adoptedCallback() {
    console.debug('Admin MFE element moved to new page.');
  }

  attributeChangedCallback(/*name, oldValue, newValue*/) {
    console.debug('Admin MFE element attributes changed.');
  }
}

customElements.define('admin-mfe', AdminMFE);
