var str1 = prompt("Enter");
var str2 = prompt("Enter");

anagram(str1, str2);

function anagram(str1, str2) {
    var strLen1 = str1.length;
    var strLen2 = str2.length;
    var flag = 0;
    if (strLen1 == strLen2) {
        var s1 = str1.split('').sort();
        var s2 = str1.split('').sort();
        for (var i = 0; i < strLen1; i++) {
            for (var j = i; j <= i; j++) {
                if (s1[i] == s2[j]) {
                    flag = 1;
                }
            }
        }
    } else {
        flag = 0;
    }

    if (flag == 0) {
        document.write("Not anagram");
    } else {
        document.write("Anagram");
    }
}
