class Form {
    constructor() 
    {
  
        this.email=createInput('email Id');
       
      
        this.button=createButton('SUBMIT');
        this.button.position(680,200);
      
    }
  
    
  
    display(){
      
        this.email.position(500,200);
        this.button.position(680,200);
  
      this.button.mousePressed(()=>{
  
         player.name = this.email.value();
        
       VoterCounts+=1;
        player.update();
        player.updateCount(VoterCounts);
       
      });
  
    }
  }
  