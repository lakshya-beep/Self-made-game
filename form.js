class Form {
    constructor(){
        this.input = createInput('').attribute("placeholder","username");
        this.enter = createButton('enter');
        this.greetings = createElement('h3');

    }

    display(){
        var title = createElement('h1');
        title.html("ARCHERY GAME");
        title.position(displayWidth/2-9,200)

        this.input.position(10, 10);
        this.enter.position(250, 200);



        this.enter.mousePressed(()=>{
            this.input.hide();
            this.enter.hide();
      
            playername = this.input.value();

            this.greetings.html("Hello " + playername );
            this.greetings.position(130, 160);
           
          });
    }
}