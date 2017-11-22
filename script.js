$(document).ready(function(){

    console.log("jQuery fired!");

    $("#click button").click(function() {
        console.log("You clicked it like Adam Sandler!");
    });

    $("#hide button").click(function(){
        $("#hide p").hide();
    });

    $("#show button").click(function(){
        $("#show p").show();
    });

    $("#toggle button").click(function(){
        $("#toggle p").toggle();
    });

    $("#slideDown button").click(function(){
        $("#slideDown p").slideDown();
    });

    $("#slideUp button").click(function(){
        $("#slideUp p").slideUp();
    });

    $("#slideToggle button").click(function(){
        $("#slideToggle p").slideToggle();
    });

    $("#fadeIn button").click(function(){
        $("#fadeIn p").fadeIn();
    });

    $("#fadeOut button").click(function(){
        $("#fadeOut p").fadeOut();
    });

    $("#addClass button").click(function(){
        $("#addClass p").addClass("red");
    });

    $("#before button").click(function(){
        $("#before p").before("<p>I'm a new paragraph!</p>");
    });

    $("#after button").click(function(){
        $("#after p").after("<p>I'm another new paragraph!</p>");
    });

    $("#append button").click(function(){
        $("#append p").append("<p>This is additional content...</p>");
    });

    $("#html button").click(function(){
        $("#html p").html("<p><b>This is cool!</b></p>");
    });

    $("#attr button").click(function(){
        $("#attr a").attr("data","this is additional data.");
    });

    $("#val button").click(function(){
        var value = $("#val input").val();
        alert(value);
    });

    $("#text button").click(function(){
        $("#text p").text("This content is being manipulated!");
    })
    
    $("#data button").click(function(){
        $("#data p").data( "test", { first: 40, last: "pizza!"});
        $("span:first").text($("#data p").data("test").first);
        $("span:last").text($("#data p").data("test").last);
    })

});
