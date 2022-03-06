var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function like(n) {
    var a = document.getElementById(n);
    counter[n] += 1;
    a.innerText = counter[n];
}

function dislike(n) {
    var a = document.getElementById(n);
    counter[n] -= 1;
    a.innerText = counter[n];
}
