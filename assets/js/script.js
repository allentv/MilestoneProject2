$(document).ready(function(){   
    
    // Global variables
    let totalMatch = 0;
    let totalTurns = 0;
    let click = 0;
    let checkArray = []; 
    let characterArray = [];
    let newArray = [];
    
    // Reset buttons
    $("#reset2").click(function(){
        $("#turns").html("<h1>" + "0" + "</h1>");  
        let i;
        for(i=1;i<=16;i++){
            $("#"+i).removeClass($("#"+i).attr("class")).addClass("card");
        }
        totalMatch = 0;
        totalTurns = 0;
        click = 0;
        checkArray = [];
        characterArray = [];
        newArray = [];
        $("#levelSelect").show("slow");
        $(".medium").show(); 
        $(".hard").show();
    });

    $("#reset").click(function(){                
        $("#turns").html("<h1>" + "0" + "</h1>");    
        $("#gameEnd").hide();
        let i;
        for(i=1;i<=16;i++){
            $("#"+i).removeClass($("#"+i).attr("class")).addClass("card");
        }
        totalMatch = 0;
        totalTurns = 0;
        click = 0;
        checkArray = [];
        characterArray = [];
        newArray = [];
        $("#levelSelect").show("slow");
        $(".medium").show(); 
        $(".hard").show();               
    });
    
    //Sound on/off button control function
    let sound = true;   
    $("#sound").click(function(){
        if(sound===true){    
            sound= false;            
            $("#sound i").removeClass("fa-volume-up").addClass("fa-volume-mute");
            for (let i=2; i<=4; i++){
                 $("#myAudio" + i).attr("src","assets/sound/silence.mp3");
            }                      
        }
        else{
            sound= true;            
            $("#sound i").removeClass("fa-volume-mute").addClass("fa-volume-up");
            $("#myAudio2").attr("src","assets/sound/force-strong.mp3");
            $("#myAudio3").attr("src","assets/sound/most-impressive.mp3");
            $("#myAudio4").attr("src","assets/sound/sure.mp3");
        }
    });
    
    function smooth(){
        window.scroll({
        top: 200, 
        left: 0, 
        behavior: 'smooth'
        });
    }

    // Activates level modal
    $("#start").one("click", function(){                 
        document.getElementById("myAudio1").play();
        $("#levelSelect").show("slow");      
    }); 

    // Removes level select Modal and starts game    
    $("#level").click(function(){
        if($("input[type=radio][name=level]:checked").length===1){
            $("#levelSelect").hide("slow");
            $("#start").html("<h5>"+"Match the cards!"+"</h5>");          
            game();
            smooth();                         
        }      
    }); 

    // Defines characterArray 
    function gameArray(level){        
        let mainArray = ["yoda","yoda","vader","vader","luke","luke","r2","r2","solo","solo","cpo","cpo","boba","boba","chewy","chewy"];             
        if(level==="easy"){                
                characterArray = mainArray.splice(0,8);
                $(".medium").hide(); 
                $(".hard").hide();                
        }
            else if(level==="medium"){
                characterArray = mainArray.splice(0,12);
                $(".hard").hide();                
        }
            else if(level==="hard"){
                characterArray = mainArray.splice(0,16);                               
        } 
        
    }

    // Shuffles Array 
    function shuffleArray(array){
        let len = array.length;
        for(let i=0; i<=len-1; i++){
        let rand = Math.floor((Math.random() * (array.length-1)) + 0);  
        newArray.push(array[rand]);
        array.splice(rand,1);        
        }
    return newArray
    };   
    
    // Checks for card match 
    function matchccheck(array){        
        if (array[0]===array[1]){
            totalTurns += 1;
            $("#turns").html("<h1>" + totalTurns + "</h1>");                       
            totalMatch += 1;
            if(totalMatch===(newArray.length)/2){
                $(".modal").css("background", "rgba(0,0,0,0.9)");
                document.getElementById("myAudio3").play();                
                $("#gameEnd").show();
                $("#finish").html("You took " + totalTurns + " turns to complete!");
                funFacts();                               
            }
            else{                                    
                document.getElementById("myAudio2").play();                
                $("."+ array[0]).off("click");               
                click = 0;          
                checkArray = [];         
            } 
        }
        else if(array[0]!==array[1]){
            totalTurns += 1;
            $("#turns").html("<h1>" + totalTurns + "</h1>");                                
            document.getElementById("myAudio4").play();     
            setTimeout(function(){                
            $("."+ array[0]).addClass("card"); 
            $("."+ array[1]).addClass("card");            
            checkArray = []; 
            click = 0;                                
            }, 2000);                        
        }
    }
                                                                           
    // Game logic
    function game(){    
        let level = $("input[type=radio][name=level]:checked").val();             
        gameArray(level);        
        newArray = shuffleArray(characterArray);        
        let i;
        for (i=1; i<newArray.length+1; i++){
            $("#" + i).addClass(newArray[i-1]);
        }  
        $(".card").click(function(){
            if(click<=1 && (($(this).attr("class")).length)>=6){
                click += 1;            
                $(this).removeClass("card");       
                checkArray.push($(this).attr("class"));                
                if (click===2){ 
                matchccheck(checkArray);           
                }
            }
        });  
    }
    
    // Starwars API character select 
    function getData(url, cb) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));                
            }
            else if (this.readyState == 4 && this.status == 404) {
                $("#data1").html("Name: Luke Skywalker" );
                $("#data2").html("Height: 172");
                $("#data3").html("Mass: 77 ");
                $("#data4").html("Hair-colour: blond");
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }
       
    //Sends API data to HTML div
    function funFacts(){
        let randomnum = Math.floor(Math.random() * 80);
        getData("https://swapi.dev/api/people/"+randomnum+"/", function(data){            
            $("#data1").html("Name: " + data.name);
            $("#data2").html("Height: " + data.height);
            $("#data3").html("Mass: " + data.mass);
            $("#data4").html("Hair-colour: " + data.hair_color);            
        });
    }    
});                                                                                                     