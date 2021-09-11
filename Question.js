class Question {

  constructor() {
    this.title = createElement('h1')
    this.input = createInput(",");
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter the option.....");



    this.button = createButton('Submit');

    this.message = createElement("h2");

    this.question = createElement("h3");

    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");

    
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    this.question.hide();
    this.options.hide();
    this.input1.hide();




  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);
    
    this.question.html(" Question: When did India got inpendence ?");
    this.input1.html();
    this.input2.html();
    this.option1.html("1. 1940");
    this.option2.html("2. 1950");
    this.option3.html("3. 1947");
    this.option4.html("4. 1980");
    


    this.option1.position(30,100);
    this.option2.position(30,130);
    this.option3.position(30,160);
    this.option4.position(30,190);
    this.question.position(30,58);
    this.input1.position(240, 320);
    this.input2.position(450,320);
    this.button.position(400, 370);
    this.message.position(280,200)
    
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      var message =
       `Thank you ${this.input.value()}
      </br> Your answer has been submitted` ;
      this.message.html(message)
    })


  }
}
