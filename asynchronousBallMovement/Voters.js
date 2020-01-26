class Voters {
    constructor(){
      
     
      this.name=null;
  
    }
  
    getCount(){
      var VoterCountsRef = database.ref('VoterCounts');
      VoterCountsRef.on("value",function(data){
        VoterCounts = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        VoterCounts: count
      });
    }
  
    update(){
      var VoterIndex = "Voters/Voter" +  this.index;
      database.ref(playerIndex).set({
        EmailID:this.name,
        distance: answer
      });
    }
}