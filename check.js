if (!authenticatedUser()) {
    window.location.href = '../index.html';
}

function authenticatedUser() {
    console.log(localStorage.getItem('authenticated'));
    return localStorage.getItem('authenticated') === 'true';
}

window.addEventListener('load', function() {
    sessionStorage.setItem('sessionActive', 'true');
    const tabId = `tab_${Date.now()}_${Math.random()}`;
    sessionStorage.setItem('tabId', tabId);
    localStorage.setItem(tabId, 'true');
});

window.addEventListener('beforeunload', function() {
    const tabId = sessionStorage.getItem('tabId');
    localStorage.removeItem(tabId);

    setTimeout(function() {
        let activeTabs = Object.keys(localStorage).filter(key => key.startsWith('tab_'));
        if (activeTabs.length === 0) {
            localStorage.setItem('authenticated', 'false');
        }
    }, 100);
});
