    if (!authenticatedUser()) {
        window.location.href = '../index.html';
    }


    function authenticatedUser() {
        // Check if the 'authenticated' flag is set to 'true' in localStorage
        console.log(localStorage.getItem('authenticated'));
        return localStorage.getItem('authenticated') === 'true';
    }
    window.addEventListener("beforeunload", function(e){
        localStorage.setItem('authenticated', 'false');
     });
