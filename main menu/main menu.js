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