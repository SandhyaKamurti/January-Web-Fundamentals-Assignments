function hidePopup() {
    var unsub = document.getElementsByClassName('popup')[0];
    unsub.classList.add("hide-popup");
    console.log(unsub.classList);
}

function showPopup() {
    var sub = document.getElementsByClassName("popup")[0];
    sub.classList.replace("hide-popup", "popup");
    console.log(sub.classList);
}
