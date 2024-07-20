function authenticatedUser() {
    const authStatus = sessionStorage.getItem('authenticated');
    const expirationTime = sessionStorage.getItem('expirationTime');

    if (authStatus === 'true' && expirationTime) {
        const currentTime = new Date().getTime();
        if (currentTime > expirationTime) {
            sessionStorage.setItem('authenticated', 'false');
            sessionStorage.removeItem('expirationTime');
            return false;
        }
        return true;
    }

    return false;
}

function checkAuthentication() {
    if (!authenticatedUser()) {
        window.location.href = '../index.html';
    }
}

document.addEventListener("DOMContentLoaded", checkAuthentication);

function logout() {
    sessionStorage.setItem('authenticated', 'false');
    sessionStorage.removeItem('expirationTime');
    window.location.href = '../index.html';
}


function attachLogoutHandlers() {
    const logoutButtons = document.querySelectorAll('.logout-button');
    logoutButtons.forEach(button => {
        button.addEventListener('click', logout);
    });
}


document.addEventListener("DOMContentLoaded", attachLogoutHandlers);

function login() {
    sessionStorage.setItem('authenticated', 'true');
    const expirationTime = new Date().getTime() + 30 * 60 * 1000;
    sessionStorage.setItem('expirationTime', expirationTime);
}
