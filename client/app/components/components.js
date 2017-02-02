import angular from 'angular';
import Home from './home/home';
import UserLanding from './userLanding/userlanding';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home,
  UserLanding,
  About
])
.name;

export default componentModule;
