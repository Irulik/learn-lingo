function showLoginPopup() {
    const logInLinkEl = document.getElementById('logInLink');
    const logInButtonEl = document.getElementById('logInButton');
    const loginPopupEl = document.querySelector('.js-login-popup-container');
    
    logInLinkEl.addEventListener('click', showLoginPopup);
    logInButtonEl.addEventListener('click', showLoginPopup);
    
    loginPopupEl.classList.add('show');
    document.body.classList.add('no-scroll');
}

const loginPopupEl = document.querySelector('.js-login-popup-container');
loginPopupEl.addEventListener('click', e => {
    if (!e.target.classList.contains('js-popup-container')) return;
    hideLoginPopup();
});

const modalCloseBtnLoginEl = document.querySelector('.js-login-popup-container .modal-close-btn');
modalCloseBtnLoginEl.addEventListener('click', hideLoginPopup);

function hideLoginPopup() {
    loginPopupEl.classList.remove('show');
    document.body.classList.remove('no-scroll');
}

const loginFormEl = document.querySelector('.popup-login-form');
loginFormEl.addEventListener('submit', e => {
    try {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.target));
        // loginFunction(email, password);

        // Після авторизації можна приховати попап:
        hideLoginPopup();
    } catch ({ message }) {
        console.log(message);
    }
});

export { showLoginPopup, hideLoginPopup };