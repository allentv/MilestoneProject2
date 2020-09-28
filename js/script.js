$(document).ready(function(){
    
    let colorArray = ["red","red","blue","blue","green","green"]; 
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

    let click = 0;
    checkArray = []

    
    $(".card").click(function(){
        if(click<=1){
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
            console.log("." + array[0])
            $("."+ array[0]).off("click");                    
            $("body").css("background", "orange");
            setTimeout(() => {
                $("body").css("background", "violet");
                checkArray = [];
                click = 0;
            }, 2000);         

        }
        else if(array[0]!==array[1]){ 
            $("body").css("background", "orange");                                                        
            setTimeout(() => {
                $("body").css("background", "violet");
                $("."+ array[0]).addClass("card"); 
                $("."+ array[1]).addClass("card"); 
                checkArray = [];
                click = 0;                
            }, 2000);
        }
    }
})