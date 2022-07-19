$(document).ready(function () {

    // for togggling on button with class "toggle"
    let toggle = true;
    $(".clicks").on("click", function () {
        if (toggle) {
            $("#box").addClass("show");
            toggle = false;
        }
        else {
            $("#box").removeClass("show");
            toggle = true;
        }
    });

    // for removing box on clicking crossmark
    $("#crossmark").on("click", function () {
        $("#box").removeClass("show");
    });

    if(validate()){
        $("#box").removeClass("show");
    }
    function validate(){

        $("#usernameValidation").hide();
        $("#emailValidation").hide();
        let usernameError = true;
        let emailError = true;
    
        // event handler for username validation
        $("#username").keyup(function () {
            username_validation();
        });
    
            // function for username validation
        function username_validation() {
            let usernameRegex = new RegExp("^[A-Za-z][A-Za-z0-9_]{7,29}$");
            let usrenameVal = $("#username").val();
            if (usernameRegex.test(usrenameVal)) {
                $("#usernameValidation").hide();
            } else {
                $("#usernameValidation").show();
                $("#usernameValidation").html("Invalid Username");
                $("#usernameValidation").css("color", "#ff0000");
                usernameError = false;
                return false;
            }
        }
    
        // event handler for username validation
        $("#email").keyup(function () {
            email_validation();
        });
    
         // function for email validation
        function email_validation() {
            let emailregex = new RegExp(
                "^([._a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]){2,8}$/"
            );
            let emailregexo = new RegExp(
                "^([._a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]){2,3}.[a-zA-Z]{1,3}$"
            );
            let emailVal = $("#email").val();
    
            if (emailregex.test(emailVal) || emailregexo.test(emailVal)) {
                $("#emailValidation").hide();
            } else {
                $("#emailValidation").show();
                $("#emailValidation").html("Invalid Email");
                $("#emailValidation").css("color", "#ff0000");
                emailError = false;
                return false;
            }
        }
    
        $(".btn").click(function () {
            validation();
        });
    
        function validation() {
            username_validation();
            email_validation();
            if (
                usernameError == true &&
                emailError == true
            ) {
                return true;
            } else {
                return false;
            }
        }
    }


});
