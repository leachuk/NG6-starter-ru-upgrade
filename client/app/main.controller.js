class MainController {
  constructor() {
    "ngInject";
    this.name = 'main bar';
    console.log('In MainController');
  }

  initApp(){
    console.log("In MainController > initApp");
  }
}

export default MainController;
