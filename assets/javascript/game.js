window.onload=function(){
    
    
    //create 4 characters    
    var arya={
        attackPower: 10,
        counterAttack: 60,
        hp: 200
    };
    var jonSnow={
        attackPower: 15,
        counterAttack: 10,
        hp: 150
    };
    var nightKing={
        attackPower: 25,
        counterAttack: 40,
        hp: 200
    };
    var theHound={
        attackPower: 20,
        counterAttack: 20,
        hp: 160
    };

   
    //declare global variables

    var selectedChar;
    var selectedEnemy;
    var charCount = 0;
    var enenmyCount = 0;

    $(".char").on("click",function(){
        //set selected char
        selectedChar = $(this.id);
        console.log(this.id);
        console.log(selectedChar.counterAttack)
        //append selected charb
      if(charCount==0){
        $("#urChar").append(selectedChar);
        charCount = 1;
      }else if(charCount ==1 && enenmyCount==0){
        $("#enemies").append(selectedChar);
        enenmyCount = 1;
      }
      console.log("attack power is: " + this.id);



    })
























}