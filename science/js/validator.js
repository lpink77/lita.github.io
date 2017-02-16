function validate() {
    var checkname = contactform.name.value.length;
    if (checkname < 5) {
        alert("your name is too short");
        contactform.name.focus();
        return false;
    }

    var checksubject = contactform.subject.value.length;
    if (checksubject < 10) {
        alert("your subject is too short");
        contactform.subject.focus();
        return false;
    }

    var checkcomment = contactform.comment.value.length;
    if (checkcomment < 50) {
        alert("your message is too short");
        contactform.subject.focus();
        return false;
    }
}