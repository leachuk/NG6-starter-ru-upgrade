import template from './userlanding.html';
import controller from './userlanding.controller';

let userLandingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'userlanding',
  $canActivate: function($rootRouter) {
    "ngInject";
    console.log('In userLandingComponent > canActivate [true]');
    console.log($rootRouter);
    //$rootRouter.navigate(['Home']); //redirect to /home route
    return true;
  }
};

export default userLandingComponent;
