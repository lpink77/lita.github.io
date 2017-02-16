   function tosubmit() {
           alert("Your message has been sent. We will contact you shortly")
             var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var subject = document.getElementById("subject").value;
            var comment = document.getElementById("comment").value;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("subject", subject);
            localStorage.setItem("comment", comment);
            return true;
        }