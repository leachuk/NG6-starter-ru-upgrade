
export default function config ($router, $componentLoaderProvider, $locationProvider) {
  "ngInject";
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');
  console.log('In config');

  console.log($router);
  // $router.config([
  //   { path: '/home', component: 'home' }
  //   // { path: '/user/:email', component: 'userLanding' },
  //   // { path: '/user/:email/comparisonrules', component: 'comparisonRule' },
  //   // { path: '/user/:guid/form', component: 'formSubmit' },
  //   // { path: '/user/:email/form/:id', component: 'formRead' }
  // ]);

  $componentLoaderProvider.setTemplateMapping(function (name) {
    console.log("setTemplate:" + name);
    return 'app/components/' + name + '/' + name + '.html';
  });
};
