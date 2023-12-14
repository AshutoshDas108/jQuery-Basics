$(document).ready(function() {
    $("#btn").click(function(){
           //btn click
           console.log('click')
          // $("#container").hide();
           $("#container").fadeOut(2000, function(){
            alert('removed')
           })
    });
    $("#btn2").click(function(){
        //btn click
        console.log('click')
        //$("#container").show();
        $("#container").fadeIn(2000, function(){
            alert('shown')
           })

 });

 $("#btn3").click(function(){
    $("#container").fadeToggle()
 })

 $("#btn4").click(function(){
    $("#container").fadeTo(500, 0.5, function(){
        alert('faded')
    });
 });

 //SLIDE Functions----------------------------------------------------------------
 //slidedown , slideup , slideToggle 

$("#btn5").click(function(){
    $("#container").slideUp(3000, function(){
        alert('slidedown')
})
});

$("#btn6").click(function(){
    $("#container").slideDown(1500, function(){
        alert('slidedown')
    })
});

$("#btn7").click(function(){
    $("#container").slideToggle(1500, function(){
        alert('slideToggled')
    })
});

//----------------------------------------------------------------
//Animate Funtions:

//animate({params}, speed, callbackFunction)

$("#btn8").click(function(){
    $("#container").animate({width : "300", height : "300", 
    opacity: "0.5", left: "250px"},3000, function(){
        alert('animated')
        $("#container").animate({width : "100", height : "100",
          borderRadius : "20px", left:"0px", opacity: "1"})
    });
    })
////////////////////////

$("#btn9").click(function(){
    //val()
    var val = $("#f").val()
    console.log(val)
    $('#f').val('This is setting using val function')

    //text()
    //ignores html does not consider html contents
    let c = $("#content").text()
    console.log(c)
    $("#content").text("<b>This is setting using text</b>");

   // html()
    let  x = $("#content1").html()
    console.log(x)

    $("#content1").html("<b>This is setting using html</b>");

    let s = $(".img").attr("src")
    console.log(s)
    s = $(".img").attr("src", "https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=1024x1024&w=is&k=20&c=EHI3hS1rXOMpRmM1LKEV8zxwYBFEkU-TqffuKtoBPC4=")
   

    //Extra Functions 
   /* append()
    prepend()
    remove()
    addClass()
    removeClass()
    toggleClass()
    */

});

});
