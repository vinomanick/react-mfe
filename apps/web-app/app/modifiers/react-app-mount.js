import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

export default class ReactAppMountModifier extends Modifier {
  modify(element) {
    import('http://localhost:4173/admin-mfe.js').then((module) => {
      this.root = module.mountApp(element, { basename: '/' });
      registerDestructor(this, () => this.root.unmount());
    });
  }
}
