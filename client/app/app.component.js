import template from './app.html';
import './app.scss';

import controller from './app.controller';

let appComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default appComponent;
