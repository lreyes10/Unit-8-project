$("button").click(function() {
    var givenAge = $(".age").val();
    var givenGender = $(".gender").val();
    var givenHaircolor = $(".haircolor").val();

    //Betty
    if (givenAge <= 15 && givenGender === "female" && givenHaircolor === "light") {
        $(".who").text("You are Betty Copper!");
        $(".who1").prepend('<img src= "https://media.glamour.com/photos/58c07b65161cc04ce303bcc5/4:3/w_692,h_519,c_limit/lili-reinhart-riverdale-betty-cooper-horizontal.jpg" />' );
    
    //Jughead
    }else if (givenAge <= 15 && givenGender === "male" && givenHaircolor === "dark")  {
        $(".who").text("You are Jughead Jones!");
        $(".who1").prepend('<img src= "https://static.wikia.nocookie.net/p__/images/1/1e/Jughead-S4-Cropped.jpg/revision/latest/top-crop/width/360/height/360?cb=20191020011017&path-prefix=protagonist" />' ); 
        
    //Veronica
    }else  if (givenAge > 15 && givenGender === "female" && givenHaircolor === "dark") {
        $(".who").text("You are Veronica Lodge!");
        $(".who1").prepend('<img src= "https://static.wikia.nocookie.net/p__/images/e/e4/Veronica-S4-Cropped.jpg/revision/latest?cb=20191020002646&path-prefix=protagonist" />' );
        
        //Cheryl
    }else  if (givenAge > 15 && givenGender === "female" && givenHaircolor === "light") {
        $(".who").text("You are Cheryl Blossom!");
        $(".who1").prepend('<img src= "https://s1.r29static.com/bin/entry/940/x,80/1938393/image.jpg" />' );  
       
    //Archie
    }else if (givenAge > 15 && givenGender=== "male" && givenHaircolor === "light") {
        $(".who").text("You are Archie Andrews!");
        $(".who1").prepend('<img src= "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2018/01/archie-andrews-items-article-011518.jpg" />' );   
        
         //Reggie
    }else  if (givenAge > 15 && givenGender === "male" && givenHaircolor === "dark") {
        $(".who").text("You are Reggie Mantle!");
        $(".who1").prepend('<img src= "https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/riverdale-2871541.jpg?r=1611664633016" />' ); 
    }else{
        alert("that wasnt valid!");
    }
    });

