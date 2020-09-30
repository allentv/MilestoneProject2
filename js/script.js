$(document).ready(function(){    
    
    $(document).ready(() => { 
        setInterval(() => { 
            $("#start").fadeIn(); 
            $("#start").fadeOut(); 
        }, 500); 
    });

    $("#reset2").click(function(){
        location.reload();     
        game()
    })
    
    $("#reset").click(function(){
        $("#myModal").hide();
        location.reload();        
    })

    $("#start").one("click", function(){
        $(".card").off("click");
        document.getElementById("myAudio1").play();
        $("#myModal2").show();         
        $("#start").off("click").fadeIn();
                 
              
    })

    // code from https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/

    function displayRadioValue() { 
            let ele = $('[name="level"]');               
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked){                
                return ele[i].value
                }                  
            } 
        }     
    
    $("#level").click(function(){   
        $("#myModal2").hide();
        game()
    })    

    function game(){        
        let level = displayRadioValue() 
        console.log(level)
        
        function gameArray(){            
            if(level==="easy"){
                colorArray = ["red","red","blue","blue","green","green","purple","purple"];
                $(".medium").hide(); 
                $(".hard").hide();                
            }
            else if(level==="medium"){
                colorArray = ["red","red","blue","blue","green","green","purple","purple","pink","pink","brown","brown"];
                $(".hard").hide();                
            }
            else if(level==="hard"){
                colorArray = ["red","red","blue","blue","green","green","purple","purple","pink","pink","brown","brown","cyan","cyan","black","black"];
                               
            }
        }
        
        gameArray()        
        let click = 0;
        let checkArray = [];
        let totalMatch = 0;
        let totalTurns = 0;
             
        console.log(colorArray)         

        function shuffleArray(array) { 
        for (var i = array.length - 1; i > 0; i--) {  
        
        // Generate random number 

            var j = Math.floor(Math.random() * (i + 1)); 
                            
            var temp = array[i]; 
            array[i] = array[j]; 
            array[j] = temp; 
            }         
            return array; 
        } 

        let newArray = shuffleArray(colorArray)
        console.log(newArray)   

        let i;
        for (i=1; i<newArray.length+1; i++){
            $("#" + i).addClass(newArray[i-1]);
        }  
    
        console.log(($("#1").attr("class")).length)
    
        $(".card").click(function(){
            if(click<=1 && (($(this).attr("class")).length)>=6){ 
                         
                click += 1;            
                $(this).removeClass("card");       
                checkArray.push($(this).attr("class"));
                console.log(checkArray);
                console.log(click);
                if (click===2){ 
                matchccheck(checkArray)           
                }
            }
        })
   

        function matchccheck(array){
            if (array[0]===array[1]){
                totalTurns += 1;
                $("#turns").text("Turns: " + totalTurns)                       
                totalMatch += 1;
                $("#matches").text("Matches: " + totalMatch)
                console.log(totalMatch);
                if(totalMatch===(colorArray.length)/2){
                    document.getElementById("myAudio2").play();                
                    $("#myModal").show();
                    $("#finish").text("You took " + totalTurns + " turns to complete!");                
                }
                else{
                                    
                    document.getElementById("myAudio2").play();                   
                    console.log("." + array[0])                
                    $("."+ array[0]).off("click");                    
                    $("body").css("background", "orange");
                    setTimeout(() => {
                    $("body").css("background", "violet");
                    click = 0;          
                    checkArray = [];             
                    }, 2000);
                    
                } 
            }
            else if(array[0]!==array[1]){
                totalTurns += 1;
                $("#turns").text("Turns: " + totalTurns)                                         
                checkArray = [];                
                $("body").css("background", "orange");                                                        
                setTimeout(() => {
                $("body").css("background", "violet");
                $("."+ array[0]).addClass("card"); 
                $("."+ array[1]).addClass("card"); 
                click = 0;
                checkArray = [];                                    
            }, 2000);
                        
            }

            }

        }
    
})