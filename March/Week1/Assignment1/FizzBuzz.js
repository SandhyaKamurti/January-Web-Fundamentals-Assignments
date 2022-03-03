function user_input() {
    var a = prompt("Enter a number");
    if (isNaN(a)) {
        alert("Not a number");
    } else {
        fizzBuzz(a);
    }
}

function fizzBuzz(a) {
    for (var i = 1; i <= a; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write("FizzBuzz" + "<br>");
        } else if (i % 5 == 0) {
            document.write("Buzz" + "<br>");
        } else if (i % 3 == 0) {
            document.write("Fizz" + "<br>");
        } else {
            document.write(i + "<br>");
        }
    }
}
