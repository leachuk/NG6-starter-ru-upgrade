import template from './userlanding.html';
import controller from './userlanding.controller';

let userLandingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'userlanding',
  $canActivate: function() {
    console.log('In userLandingComponent > canActivate [true]');
    return true;
  }
};

export default userLandingComponent;
