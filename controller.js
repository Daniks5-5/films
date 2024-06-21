class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View();
        this.api = new API();
    }

    init(){
   this.view.render(); 
   this.api.getMems();

 
    }
}