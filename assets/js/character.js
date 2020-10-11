$(document).ready(function(){    
    
    
    $(".char").click(function(){
        $(this).removeClass("char");
        let image = $(this).attr("class");        
        $(".myImage img").attr("src","assets/images/" + image +".png");
        $(".myImage img").attr("alt", image);              
        $("#character-info").show();
        funFacts($(this).attr("id"));
        smooth();
    });

    function smooth(){
        window.scroll({
        top: 200, 
        left: 0, 
        behavior: 'smooth'
        });
    }  

    $("#reset").click(function(){
         $("#character-info").hide();         
    });

    // Starwars API character select 
    function getData(url, cb) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));                
            }
            else if (this.readyState == 4 && this.status == 404) {
                $("#data1").html("Name: Data unavailable" );
                $("#data2").html("Height: Data unavailable");
                $("#data3").html("Mass: Data unavailable");
                $("#data4").html("Hair-colour: Data unavailable");
                $("#data5").html("Eye Colour: Data unavailable");
                $("#data6").html("Birth year: Data unavailable");
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }    
    //Sends API data to HTML div
    function funFacts(num){        
        getData("https://swapi.py4e.com/api/people/"+num+"/", function(data){            
            $("#data1").html("Name: " + data.name);
            $("#data2").html("Height: " + data.height);
            $("#data3").html("Mass: " + data.mass);
            $("#data4").html("Hair-colour: " + data.hair_color); 
            $("#data5").html("Eye Colour: " + data.eye_color);
            $("#data6").html("Birth year: " + data.birth_year);            
        });
    } 
    
});