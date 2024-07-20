function authenticatedUser() {
    return localStorage.getItem('authenticated') === 'true';
}

function checkAuthentication() {
    if (!authenticatedUser()) {
        window.location.href = '../index.html';
    }
}


document.addEventListener("DOMContentLoaded", checkAuthentication);

function logout() {
    localStorage.setItem('authenticated', 'false');
    window.location.href = '../index.html';
}

function attachLogoutHandlers() {
    const logoutButtons = document.querySelectorAll('.logout-button');
    logoutButtons.forEach(button => {
        button.addEventListener('click', logout);
    });
}

document.addEventListener("DOMContentLoaded", attachLogoutHandlers);
