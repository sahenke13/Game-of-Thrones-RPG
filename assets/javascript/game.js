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
    var sidebar = $("#charBankLabel")
    //create 4 characters    
    var charBank=[ 
        {
        name: "arya",
        attackPower: 30,
        counterAttack: 20,
        hp: 185
    },
        {
        name: "jonSnow",
        attackPower: 35,
        counterAttack: 10,
        hp: 195
    },
        {
        name: "theHound",
        attackPower: 40,
        counterAttack: 20,
        hp: 175
    },
        {
        name: "nightKing",
        attackPower: 5,
        counterAttack: 35,
        hp: 180
    }
    ]
   
    $("#victoryBanner").hide();
    $("#attack").hide();
    $("#reset").hide();
        // $(enemyHealth).text("HP: " + x.hp);
        //     $(heroHealth).text("HP: " + y.hp);    
  
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


            // $(enemyHealth).text("HP: " + x.hp);
            // $(heroHealth).text("HP: " + y.hp);
           
    });
        
    if(charCount == 1 && enemyCount == 1){
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
            var heroHealth = "#"+y.name+"Hp";
            var enemyHealth = "#"+x.name+"Hp";
           
            if(x.hp >0 && y.hp >0)
            {         
                x.hp =  x.hp - y.attackPower;
                y.hp = y.hp - x.counterAttack;
                y.attackPower = y.attackPower + 15;
    
                console.log("enemyHealth is " + x.hp);
                console.log("Hero Health is "+ y.hp);
                
                $(enemyHealth).text("HP: " + x.hp);
                $(heroHealth).text("HP: " + y.hp);
                // if hero dies
                if(y.hp<=0)
                {
                alert("Valer Morghulis");
                $("#reset").show();
                $("#attack").hide(); 
                $(heroHealth).hide();
                sidebar.text("Shame, you have brought shame to your house")
                } 
                //if enemy dies
                else if(x.hp<=0)
                {
                    console.log("You have vanquished your enemy")
                    $(enemyHealth).hide();
                    defeated = 1;
                    enemyCount = 0;
                    winCount++;
                    $(test).detach().appendTo("#vanquished")
                    sidebar.text("select which Enemy to attack");
                    $("#attack").hide(); 
                }
               
                
            }
            if(winCount==3){
                
                $("#reset").show();
                $("#attack").hide(); 
                $('#charBankLabel').text("You have won control of Westoros.");
                
                
            }
            return defeated, enemyCount, winCount, charCount, heroHealth, enemyHealth;
    
        }

        function reset(){
            location.reload();

        }
    }
