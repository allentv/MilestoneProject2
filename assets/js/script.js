$(document).ready(function(){     
    
    
    // Reset buttons
    $("#reset2").click(function(){
         location.reload();        
    })
    
    $("#reset").click(function(){
        $("#myModal").hide();
        location.reload();
    })
    
    //Sound on/off button function
    let sound = true;
    $("#sound").click(function(){
        if(sound===true){    
            sound= false;
            console.log($("#myAudio2").attr("src"))
            $("#myAudio2").attr("src","");
        }
        else{
            sound= true;
            console.log($("#myAudio2").attr("src",""))
            $("#myAudio2").attr("src","assets/sound/force-strong.mp3");
        }
    })
     

    
    $("#start").one("click", function(){        
        $(".card").off("click");
        document.getElementById("myAudio1").play();
        $("#myModal2").show("slow");      
    })        
     
    $("#level").click(function(){
        if($("input[type=radio][name=level]:checked").length===1){
            $("#myModal2").hide("slow");
            $("#start").html("<h5>"+"Match the card!"+"</h5>");          
            game();
        }      
    })
        

    function game(){
        let click = 0;
        let checkArray = [];
        let totalMatch = 0;
        let totalTurns = 0;                       
        
        let level = $("input[type=radio][name=level]:checked").val() 
        console.log(level);
        
        function gameArray(){            
            if(level==="easy"){                
                colorArray = ["yoda","yoda","vader","vader","luke","luke","r2","r2"];
                $(".medium").hide(); 
                $(".hard").hide();                
            }
            else if(level==="medium"){
                colorArray = ["yoda","yoda","vader","vader","luke","luke","r2","r2","solo","solo","cpo","cpo"];
                $(".hard").hide();                
            }
            else if(level==="hard"){
                colorArray = ["yoda","yoda","vader","vader","luke","luke","r2","r2","solo","solo","cpo","cpo","boba","boba","chewy","chewy"];                               
            }
        }
        
        gameArray()        
        
             
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

        let newArray = shuffleArray(colorArray);
        console.log(newArray)   

        let i;
        for (i=1; i<newArray.length+1; i++){
            $("#" + i).addClass(newArray[i-1]);
        }  
    
        console.log(($("#1").attr("class")).length)
    
        $(".card").click(function(){
            if(click<=1 && (($(this).attr("class")).length)>=5){
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
                $("#turns").html("<h1>" + totalTurns + "</h1>");                       
                totalMatch += 1;
                $("#matches").html("<h1>" + totalMatch + "</h1>");
                console.log(totalMatch);
                if(totalMatch===(colorArray.length)/2){
                    $(".modal").css("background", "rgba(0,0,0,0.9)")
                    document.getElementById("myAudio2").play();                
                    $("#myModal").show();
                    $("#finish").html("You took " + totalTurns + " turns to complete!");
                    funFacts()                
                }
                else{                                    
                    document.getElementById("myAudio2").play();                   
                    console.log("." + array[0])                
                    $("."+ array[0]).off("click");               
                    click = 0;          
                    checkArray = [];         
                } 
            }
            else if(array[0]!==array[1]){
                totalTurns += 1;
                $("#turns").html("<h1>" + totalTurns + "</h1>");                                         
                checkArray = [];           
                setTimeout(function(){                
                $("."+ array[0]).addClass("card"); 
                $("."+ array[1]).addClass("card"); 
                click = 0;
                checkArray = [];                                    
                }, 2000);                        
            }
        }
    }
    
    function getData(url, cb) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));
            }
        };

        xhr.open("GET", url);
        xhr.send();
    }
       

    function funFacts(){
        let randomnum = Math.floor(Math.random() * 80);
        getData("https://swapi.dev/api/people/"+randomnum+"/", function(data){            
            $("#data1").html("Name: " + data.name);
            $("#data2").html("Height: " + data.height);
            $("#data3").html("Mass: " + data.mass);
            $("#data4").html("Hair-colour: " + data.hair_color);            
        })
    }
    
})