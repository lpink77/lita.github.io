   function validation() {
       var checkuser = loginform.username.value;
       if (checkuser != "lita") {
           alert("your id / password is wrong");
           loginform.username.focus();
           return false;
       }
       
       var checkpswd = loginform.password.value;
       if (checkpswd != "lita") {
           alert("your id / password is wrong");
           loginform.username.focus();
           return false;
       }
       
       alert("login succeed")
   }