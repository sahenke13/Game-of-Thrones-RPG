window.onload=function(){
    
    //declare global variables

    var selectedChar;
    var selectedCharIndex;
    var selectedEnemy;
    var enemyChar;
    var enemyCharIndex;
    var charCount = 0;
    var enemyCount = 0;
    var defeated = 0;
    var winCount = 0;
    
    //create 4 characters    
    var charBank=[ 
        {
        name: "arya",
        attackPower: 20,
        counterAttack: 15,
        hp: 200
    },
        {
        name: "jonSnow",
        attackPower: 15,
        counterAttack: 15,
        hp: 160
    },
        {
        name: "theHound",
        attackPower: 40,
        counterAttack: 30,
        hp: 130
    },
        {
        name: "nightKing",
        attackPower: 25,
        counterAttack: 30,
        hp: 175
    }
    ]
    
    
    $("#attack").hide();
    $("#reset").hide();
        
  
    //Click on char elements to select your Hero and your enemies
    $(".char").on("click",function()
    {
        console.log("charCount" + charCount, "enemyCount" + enemyCount)


    if(charCount === 0 && enemyCount ===0)
      {
        selectedCharIndex = parseInt($(this).attr("value"));
        selectedChar = charBank[selectedCharIndex];
        $('#charBankLabel').text("select which Enemy to attack");
        
        $(this).detach().appendTo("#urChar");  
        charCount=1;
        
        
        } else if(charCount ===1 && enemyCount ===0)
        {  
            enemyCharIndex = parseInt($(this).attr("value"));
            enemyChar = charBank[enemyCharIndex];
            //APPEND ENEMY TO CURRENT ENEMY   
           
            $(this).detach().appendTo("#enemyChar");
            enemyCount = 1;  
            $("#attack").show();  
            $('#charBankLabel').text("");
            
        }  else if(charCount ===1 && enemyCount ===1)
        {
                console.log("Attack Button")
                  
            alert("You need to attack your enemy")
        } 
        console.log("charCount" + charCount, "enemyCount" + enemyCount)

    });

        $("#attack").on("click",function(){
            attack(enemyChar,selectedChar);
           
        });
        console.log("charcount" + charCount, "enemyCount" + enemyCount)
  if(charCount == 1 && enemyCount == 1){
        console.log("---------")
        console.log("charcount" + charCount, "enemyCount" + enemyCount)
        
        $("#attack").show();
        return;

    }

    $("#reset").on("click",function(){
        console.log("this is a reset test")
        reset();

    });
        
      
        //function to attact x is enemy and y is your selected character

        function attack(x, y){
            console.log("The enemy is: " + x.name);
            console.log("Your hero is: " + y.name);
            var test = "#"+x.name;
            console.log(test);
    
            if(x.hp >0 && y.hp >0)
            {         
                x.hp =  x.hp - y.attackPower;
                y.hp = y.hp - x.counterAttack;
                y.attackPower = y.attackPower + 15;
    
                console.log("enemyHeath is " + x.hp);
                console.log("Hero Health is "+ y.hp);

                if(y.hp<=0)
                {
                alert("Valer Morghulis");
                $("#reset").show();
                $("#attack").hide(); 
                } 
                //if enemy dies
                else if(x.hp<=0)
                {
                    console.log("You have vanquished your enemy")
                    console.log(x);
                    defeated = 1;
                    enemyCount = 0;
                    winCount++;
                    $(test).detach().appendTo("#vanquished")
                    $('#charBankLabel').text("select which Enemy to attack");
                    $("#attack").hide(); 
                }
               
                
            }
            if(winCount==3){
                alert("You have vanquished all of your enemies.")
                $("#reset").show();
                $("#attack").hide(); 
                
                
            }
            return defeated, enemyCount, winCount, charCount;
    
        }

        function reset(){
            location.reload();

        }
    }
