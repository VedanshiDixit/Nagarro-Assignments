function sendemail() {
  var email = document.getElementById("inputEmail").value;
  var name = document.getElementById("Username").value;
  var phone = document.getElementById("phoneNum").value;
  var msg = document.getElementById("message").value;
  var body =
    "<span align='center'>A Message From <span> " +
    name +
    "<br><br>Email : " +
    email +
    "<br><br>Phone Number : " +
    phone +
    "<br><br>Message : " +
    msg;

  var email = document.getElementById("inputEmail").value;
  Email.send({
    SecureToken: "b797bec3-e728-4c9b-8e40-74d2d1b825e1",
    To: `dixitvedanshi27@gmail.com, ${email}`,
    From: "vedu1193@gmail.com",
    Subject: "Email from" + name,
    Body: body,
    Cc: email,
  }).then((message) => {
                        if(message == 'OK')
                          alert('Message sent successfully.');
                        else
                          alert("Sorry! Message can not be sent.");
                       }
      );
}
