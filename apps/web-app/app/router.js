import EmberRouter from '@ember/routing/router';
import config from 'web-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('about');
  this.route('admin', function () {
    this.route('item', { path: '*' });
  });
});
