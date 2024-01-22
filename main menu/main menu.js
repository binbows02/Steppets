let clicks = 0;
let every10clicks = 0;

let coins = 0;
let exp = 0;

let upgrade_pet = 10;
let level = 1;

let username = "ok";

let char1 = '../designs/mp4/char 2.gif';
let char2 = '../designs/mp4/char.gif';
let displayImage = document.getElementById('char');

let pfp = "../designs/images/lol.jpg";

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) {
        return;
    }

    let currentDropDown;
    if (isDropdownButton) {
        currentDropDown = e.target.closest('[data-dropdown]');
        currentDropDown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown !== currentDropDown) {
            dropdown.classList.remove('active');
        }
    });
});

function sfx_loc(location) {
    let audio = new Audio("../designs/sounds/click.mp3");
    audio.play();

    setTimeout(function () {
        window.location.href = location;
    }, 200);

    cursor = pointer;
}

function sfx() {
    let audio = new Audio("../designs/sounds/click.mp3");
    audio.play();

    document.body.style.cursor = "pointer";
}

document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('blackoverlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    blackoverlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    blackoverlay.classList.remove('active')
}

function SwitchCharacter() {

    if (displayImage.src.match('../designs/mp4/char.gif')) {
        displayImage.src = char1;
        document.getElementById("level").innerHTML = ('Character 2 [Lv. ' + level + ']');
        document.getElementById("pet-rarity").innerHTML = ('* * * * *');
    }

    else {
        displayImage.src = char2;
        document.getElementById("level").innerHTML = ('Character 1 [Lv. ' + level + ']');
        document.getElementById("pet-rarity").innerHTML = ('* * * *');
    }
}


function click_button() {
    clicks++;
    every10clicks++;
    exp += 5;
    document.getElementById("clickscount").innerHTML = ('Steps: ' + clicks);
    document.getElementById("modalclickscount").innerHTML = ('Steps: ' + clicks);
    document.getElementById("coinscount").innerHTML = ('Coins: ' + coins);
    document.getElementById("expcount").innerHTML = ('Exp: ' + exp);

    if (every10clicks == 10) {
        every10clicks = 0;
        coins += 5;
    }
}

let pet_exp = 0;

function upgrade() {
    if (coins >= upgrade_pet) {
        coins -= upgrade_pet;
        upgrade_pet += 10;
        level++;
        pet_exp += 1000;

        let audio = new Audio("../designs/sounds/click.mp3");
        audio.play();
        document.getElementById("notenough").innerHTML = ('Pet upgraded to Lv. ' + level + '!');
        document.getElementById("expcount_pet").innerHTML = ('Exp: ' + pet_exp);
    }

    else {
        document.getElementById("notenough").innerHTML = ('You need ' + (upgrade_pet - coins) + ' more coins');
    }

    document.getElementById("level").innerHTML = ('Character 1 [Lv. ' + level + ']');
    document.getElementById("upgrade").innerHTML = ('Costs: ' + upgrade_pet);
}

let pfpImage = document.getElementById("pfp");
let pfpImagemodal = document.getElementById("modalpfp");


function display() {
    document.getElementById("clickscount").innerHTML = ('Steps: ' + clicks);
    document.getElementById("coinscount").innerHTML = ('Coins: ' + coins);
    document.getElementById("expcount").innerHTML = ('Exp: ' + exp);
    document.getElementById("upgrade").innerHTML = ('Costs: ' + upgrade_pet);
    document.getElementById("modaluserlevel").innerHTML = ('@' + username + ' [Lv. ' + userlevel + ']');
    document.getElementById("userlevel").innerHTML = ('@' + username + ' [Lv. ' + userlevel + ']');
    document.getElementById("userprogress").innerHTML = ('Next level: ' + exp + ' / ' + user_max);
    pfpImage.src = pfp;
    pfpImagemodal.src = pfp;

    document.getElementById('rank').innerHTML = ('#69');
}

function display_notenough() {
    document.getElementById("notenough").innerHTML = ('&nbsp');
}

let userlevel = 1;
let user_max = 100;

function upgrade_user() {

    if (exp >= user_max) {
        userlevel++;
        user_max += 1500;
        document.getElementById("modaluserlevel").innerHTML = ('@' + username + ' [Lv. ' + userlevel + ']');
        document.getElementById("userlevel").innerHTML = ('@' + username + ' [Lv. ' + userlevel + ']');
    }
}

setInterval(display, 500);
setInterval(display_notenough, 2000)
setInterval(upgrade_user, 2000)