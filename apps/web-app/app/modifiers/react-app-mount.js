import Modifier from 'ember-modifier';

export default class ReactAppMountModifier extends Modifier {
  modify(element) {
    import('http://localhost:4173/admin-mfe.js').then((module) => {
      module.mountApp({
        element,
        options: {
          basename: '/a/',
          baseURL: 'http://localhost:4173/',
        },
      });
    });
  }
}
