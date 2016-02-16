function Character1(){
   this.fireDelay    = 200; //Delay between fires
   this.fireLevel    = 1; //Level o normal fire
   this.energy       = 100; //Current Energy of player. Energy is used by player to do actions
   this.health       = 100; //Current Health of player. If Health 0 player die and lost life
   this.lifes        = 3; //Lifes remains before game over
   this.energyCost   = { //Cost of energy by action
       HYPERSPEED        : 2,
       NORMALFIRE        : 1,
       SPECIALFIRE       : 7,
       SHIELD            : 5
   };
   this.energyReload = 2; //Energy has a amount reloaded by sec
}

Character1.prototype = {
    constructor: Character1,
    doNormalFire: function(){
        console.log("Normal Fire of Character 1");
    },
    doSpeciaFire: function(){
        console.log("Special Fire of Character 1");
    }

};