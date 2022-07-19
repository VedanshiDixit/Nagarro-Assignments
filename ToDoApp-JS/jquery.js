$(document).ready(function () {

    const newTodo = ()=>{
      var input = $("#input").val();
      if (input !== "") {
        $("ul").append(
          "<li>" + input + '<i class="fas fa-check fa-trash "> </li>'
        );
        $("#input").val("");
      }
    }
    $("#addBtn").click(() => {
        newTodo();
    });
    $("ul").on("click", ".fa-trash", function () {
      $(this).parent("li").fadeOut(200);
    });
});


