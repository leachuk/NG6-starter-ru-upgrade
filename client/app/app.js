import angular from 'angular';

import uiRouter from 'angular-ui-router';
import 'angular-new-router';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import MainController from './main.controller';


angular.module('app', [
    'ngNewRouter',
    Common,
    Components
  ])
  .component('app', AppComponent)
  .controller('AppController', ['$router', MainController])
  .config(['$componentLoaderProvider', '$locationProvider', function($componentLoaderProvider, $locationProvider){
    console.log('Inline config');
    console.log($componentLoaderProvider);

    $componentLoaderProvider.setTemplateMapping(function (name) {
      return 'app/components/' + name + '/' + name + '.html';
    });

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
