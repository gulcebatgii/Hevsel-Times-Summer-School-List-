function authenticatedUser() {
    return sessionStorage.getItem('authenticated') === 'true';
}

function checkAuthentication() {
    if (!authenticatedUser()) {
        window.location.href = '../index.html';
    }
}

document.addEventListener("DOMContentLoaded", checkAuthentication);
function logout() {
    sessionStorage.setItem('authenticated', 'false');
    window.location.href = '../index.html';
}

function attachLogoutHandlers() {
    const logoutButtons = document.querySelectorAll('.logout-button');
    logoutButtons.forEach(button => {
        button.addEventListener('click', logout);
    });
}

document.addEventListener("DOMContentLoaded", attachLogoutHandlers);
function handleTabClose() {
    const isLastTab = window.sessionStorage.getItem('isLastTab') === 'true';
    if (isLastTab) {
        sessionStorage.setItem('authenticated', 'false');
    }
}

function checkLastTab() {
    let tabCount = parseInt(sessionStorage.getItem('tabCount') || '0');
    tabCount += 1;
    sessionStorage.setItem('tabCount', tabCount);
    window.addEventListener('beforeunload', () => {
        tabCount -= 1;
        sessionStorage.setItem('tabCount', tabCount);
        if (tabCount <= 0) {
            sessionStorage.setItem('isLastTab', 'true');
        }
    });
}

document.addEventListener("DOMContentLoaded", checkLastTab);
document.addEventListener("visibilitychange", handleTabClose);
