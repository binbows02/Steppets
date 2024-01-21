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

let players = [
    { pfp: "../designs/images/default-noimage.jpg", username: 'user1', pet: 'Unknown', coins: 0, steps: 0, exp: 0 },
    { pfp: "../designs/images/default-noimage.jpg", username: 'user2', pet: 'Unknown', coins: 0, steps: 0, exp: 0 },
    { pfp: "../designs/images/default-noimage.jpg", username: 'user3', pet: 'Unknown', coins: 0, steps: 0, exp: 0 },
    { pfp: "../designs/images/default-noimage.jpg", username: 'user4', pet: 'Unknown', coins: 0, steps: 0, exp: 0 },
    { pfp: "../designs/images/default-noimage.jpg", username: 'user5', pet: 'Unknown', coins: 0, steps: 0, exp: 0 }
];

function displayPlayer(index) {
    let player = players[index];
    document.getElementById(`username${index + 1}`).innerHTML = `@${player.username}`;
    document.getElementById(`pet${index + 1}`).innerHTML = `Active pet: ${player.pet}`;
    document.getElementById(`coins${index + 1}`).innerHTML = `Coins: ${player.coins}`;
    document.getElementById(`steps${index + 1}`).innerHTML = `Steps: ${player.steps}`;
    document.getElementById(`exp${index + 1}`).innerHTML = `EXP: ${player.exp}`;
    document.getElementById(`pfp${index + 1}`).src = player.pfp;
}

displayPlayer(0);
displayPlayer(1); 
displayPlayer(2); 
displayPlayer(3); 
displayPlayer(4); 

function displayOwn() {
    let own_stats = [
        { pfp: "../designs/images/lmao.png", username: 'Username', pet: 'Unknown', coins: 0, steps: 0, exp: 0, rank: '100' }  
    ];

    document.getElementById("rank").innerHTML = ('#' + own_stats[0].rank);
    document.getElementById("userlevel").innerHTML = ('@' + own_stats[0].username);
    document.getElementById("pet").innerHTML = ('Active pet: ' + own_stats[0].pet);
    document.getElementById("coins").innerHTML = ('Coins: ' + own_stats[0].coins);
    document.getElementById("steps").innerHTML = ('Steps: ' + own_stats[0].steps);
    document.getElementById("exp").innerHTML = ('EXP: ' + own_stats[0].exp);

    let pfp = document.getElementById("pfp");
    pfp.src = own_stats[0].pfp;
}


displayOwn();