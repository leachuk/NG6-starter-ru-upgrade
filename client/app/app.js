import angular from 'angular';

import uiRouter from 'angular-ui-router';
import 'angular-new-router';

import Common from './common/common';
import Components from './components/components';
import config from './app.config';
import AppComponent from './app.component';


angular.module('app', [
    'ngNewRouter',
    Common,
    Components
  ])
  .config(config)
  .component('app', AppComponent)
