function validate() {
    var name = document.forms["contact-us-form"]["fullName"];
    var email = document.forms["contact-us-form"]["emailAddress"];
  
    var emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    if (name.value == "") {
      alert("Name Needed");
      name.focus();
      return false;
    }
  
    if (email.value == "") {
      alert("Email Address Needed");
      email.focus();
      return false;
    } else if (!emailCheck.test(email.value)) {
      alert("Invalid Email Address.");
      email.focus();
      return false;
    } else {
      return true;
    }
  }

  function success() {
    var name = document.forms["contact-us-form"]["fullName"].value;
    var email = document.forms["contact-us-form"]["emailAddress"].value;
  
    if (validate()) {
      alert("Thank you, " + name + ". " + "You have provided your name and email address which is " + email + ". We will contact you shortly.");
      return true;
    }
  }