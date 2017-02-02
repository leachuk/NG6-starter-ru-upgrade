import angular from 'angular';
import homeComponent from './home.component';

let homeModule = angular.module('app.home', [])
.component('home', homeComponent)
.name;

export default homeModule;


