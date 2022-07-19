// for javascript

// function myFunction() {
//     var text1 = document.getElementById("text");

//     text1.select();
//     text1.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(text1.value);
  
// }




// for jQuery

$(document).ready(function(){
    $('#btn').click(function(){
        $('#text').select();
        document.execCommand("copy");
    });
});