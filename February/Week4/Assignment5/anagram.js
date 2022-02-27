var str1 = prompt("Enter");
var str2 = prompt("Enter");

anagram(str1, str2);

function anagram(str1, str2) {
    var strLen1 = str1.length;
    var strLen2 = str2.length;
    if (strLen1 == strLen2) {
        var s1 = str1.split('').sort().join('');
        var s2 = str2.split('').sort().join('');
        if (s1 == s2) {
            document.write("Anagram");
        } else {
            document.write("Not Anagram");
        }
    } else {
        document.write("Not Anagram");
    }
}
