import angular from 'angular';

import '@angular/router/angular1/angular_1_router.js';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import MainController from './main.controller';

angular.module('app', [
    'ngComponentRouter',
    Common,
    Components
]).value('$routerRootComponent', 'app')
  .component('app', AppComponent)
  .controller('AppController', [MainController])
  .config(['$locationProvider', function($locationProvider){
    console.log('Inline config');
    console.log($locationProvider);
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    // $mdIconProvider
    //   .iconSet('action', './assets/svg/action-icons.svg', 24)
    //   .iconSet('content', './assets/svg/content-icons.svg', 24)
    //   .iconSet('av', './assets/svg/av-icons.svg', 24)
    //   .iconSet('navigation', './assets/svg/navigation-icons.svg', 24)
    //   .iconSet('social', './assets/svg/social-icons.svg', 24)
    //   .defaultIconSet('./assets/svg/action-icons.svg');
  }]);
