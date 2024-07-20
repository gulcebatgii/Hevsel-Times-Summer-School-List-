if (!authenticatedUser()) {
    window.location.href = '../index.html';
}

function authenticatedUser() {
    console.log(localStorage.getItem('authenticated'));
    return localStorage.getItem('authenticated') === 'true';
}

window.addEventListener('load', function() {
    sessionStorage.setItem('sessionActive', 'true');
});

window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('sessionActive');

    setTimeout(function() {
        if (!sessionStorage.getItem('sessionActive')) {
            localStorage.setItem('authenticated', 'false');
        }
    }, 1000);
});
