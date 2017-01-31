class MainController {
  constructor($router) {
    "ngInject";
    this.name = 'main bar';
    this.$router = $router;

    console.log('In MainController');

    this.$router.config([
      { path: '/', redirectTo: '/home' },
      { path: '/home', component: 'home' }
    ]);
  }

  initApp(){
    console.log("In MainController > initApp");
  }
}

export default MainController;
