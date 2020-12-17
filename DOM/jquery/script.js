$(document).ready(function(){
    // $("#container").html("<h1>Hello</h1>")
    $("#container").append("<h4>add to my shopping list</h4>")

    $("#add_button").click(function(){
        // where i can write the code for what i want to do
        // when this button is clicked!
        
        // $("body").html("<h1>HELLO THERE!</h1><img src='https://media1.tenor.com/images/2eada1bbeb4ed4182079cf00070324a2/tenor.gif?itemid=13903117'>")
        
        var x = $("#item").val();
        if(x != ""){
            $("#groceries").append(`<li>${x}</li>`)
            $("#item").val("");
        }
    });
    
    // $("#item").keypress(function(){
    //     // get the value from the input
    //     var input = $("#item").val();

    //     // reverse it
    //     var reversed = "";

    //     for(var i = input.length-1; i>=0; i--) {
    //         reversed += input[i];
    //     }
        

    //     // set it back into the input
    //     $("#item").val(reversed);
    // });

})