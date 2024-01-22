function sfx_loc(location) {
    let audio = new Audio("../designs/sounds/click.mp3");
    audio.play();

    setTimeout(function () {
        window.location.href = location;
    }, 200);

    cursor = pointer;
}

let coins = 10;
let exp = 10;

function display() {
    document.getElementById("coins").innerHTML = ("Coins: " + coins);
    document.getElementById("exp").innerHTML = ("Exp: " + exp);
    document.getElementById("exp-total").innerHTML = ("[ " + exp + " / 0 ]");
    document.getElementById("exp-total2").innerHTML = ("[ " + exp + " / 0 ]");
}

display();