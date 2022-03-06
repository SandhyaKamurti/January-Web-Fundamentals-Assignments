function swap() {
    var a = parseInt(prompt("Enter a number"));
    var b = parseInt(prompt("Enter a number"));
    document.write("Your values before swap: " + "a is: " + a + " and b is: " + b + "<br>");
    a = a + b;
    b = a - b;
    a = a - b;
    document.write("Your values after swap: " + "a is: " + a + " and b is: " + b + "<br>");
}
