function add() {
    var N1 = document.getElementById("n1");
    var number1 = N1.value;
    var N2 = document.getElementById("n2");
    var number2 = N2.value;
    var result = document.getElementById("res");
    result.innerText = parseInt(number1) + parseInt(number2);
}
