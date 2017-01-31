import angular from 'angular';

import uiRouter from 'angular-ui-router';
import 'angular-new-router';

import Common from './common/common';
import Components from './components/components';
//import config from './app.config';
import AppComponent from './app.component';
//import MainController from './main.controller';


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

    $locationProvider.html5Mode(true).hashPrefix('!');

    //$locationProvider.html5Mode(true);

    // $mdIconProvider
    //   .iconSet('action', './assets/svg/action-icons.svg', 24)
    //   .iconSet('content', './assets/svg/content-icons.svg', 24)
    //   .iconSet('av', './assets/svg/av-icons.svg', 24)
    //   .iconSet('navigation', './assets/svg/navigation-icons.svg', 24)
    //   .iconSet('social', './assets/svg/social-icons.svg', 24)
    //   .defaultIconSet('./assets/svg/action-icons.svg');
  }]);


function MainController($router){
  console.log("Inline MainController");
  console.log($router);

  $router.config([
    { path: '/home', component: 'home' }
  ]);
}
// class AppController{
//   constructor() {
//     console.log("Yahooo!");
//   }
// }
