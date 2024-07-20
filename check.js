if (!authenticatedUser()) {
    window.location.href = '../index.html';
}

function authenticatedUser() {
    console.log(localStorage.getItem('authenticated'));
    return localStorage.getItem('authenticated') === 'true';
}

function updateTabCount(increment) {
    let tabCount = parseInt(sessionStorage.getItem('tabCount')) || 0;
    tabCount += increment;
    sessionStorage.setItem('tabCount', tabCount);
}

window.addEventListener('load', function() {
    updateTabCount(1);
});

window.addEventListener('beforeunload', function() {
    updateTabCount(-1);

    if (parseInt(sessionStorage.getItem('tabCount')) === 0) {
        localStorage.setItem('authenticated', 'false');
    }
});

window.addEventListener('unload', function() {
    if (parseInt(sessionStorage.getItem('tabCount')) === 0) {
        localStorage.setItem('authenticated', 'false');
    }
});
