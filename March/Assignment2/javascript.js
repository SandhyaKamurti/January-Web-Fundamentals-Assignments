function confirm_password() {
    var pas = document.getElementById("PS");
    var password = pas.value;
    var conPas = document.getElementById("CPS");
    var confirmPassword = conPas.value;
    var output_field = document.getElementById("op_text");
    output_field.innerText = confirmPassword;
    if (password == confirmPassword) {
        alert("Ok");
    } else {
        alert("Passwords do not match")
    }
}
