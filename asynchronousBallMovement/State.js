class state {
    constructor(){}
    
    getState(){
      var StateRef  = database.ref('State');
      StateRef.on("value",function(data){
         State = data.val();
      })
     
    }
  
    
    start(){
      if(State === 0){
        player = new Voters();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
}
    /*play()
    {
      form.hide();
      textSize(30);
      text("GAME START",120,100);
      Player.getPlayerInfo();
      if(allPlayers!== undefined)
      {
        var display_position=130;
        for(var plr in allPlayers)
        {
          if(plr==="player"+player.index)
          {
            fill("red");
          }
          else 
          {
            fill("black");
          }
        }*/
