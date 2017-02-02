import angular from 'angular';
import userLandingComponent from './userlanding.component';

let userLandingModule = angular.module('app.userLanding', [])
.component('userlanding', userLandingComponent)
.name;

export default userLandingModule;


