var str = prompt("Enter");

palindrome(str);

function stringReverse(str) {
    var revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str.charAt(i)
    }
    return revStr;
}

function palindrome(str) {
    var revStr = stringReverse(str);
    if (str == revStr) {
        document.write("true");
    } else {
        document.write("false");
    }
}
