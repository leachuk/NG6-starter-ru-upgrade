class MainController {
  constructor($router) {
    "ngInject";
    this.name = 'main bar';
    this.$router = $router;

    console.log('In MainController');


  }

  initApp(){
    console.log("In MainController > initApp");
    //setup router
    // this.$router.config([
    //   { path: '/home', component: 'home' }
    //   // { path: '/user/:email', component: 'userLanding' },
    //   // { path: '/user/:email/comparisonrules', component: 'comparisonRule' },
    //   // { path: '/user/:guid/form', component: 'formSubmit' },
    //   // { path: '/user/:email/form/:id', component: 'formRead' }
    // ]);
  }
}

export default MainController;
