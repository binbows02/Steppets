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

    cursor = pointer;
}
