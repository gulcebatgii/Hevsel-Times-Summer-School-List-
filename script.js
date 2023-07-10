const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButon = document.getElementById('buton');

submitButon.addEventListener('click', (e) => {
    e.preventDefault();
    

    const username = usernameInput.value; 
    const password = passwordInput.value; 




    authenticateUser (username, password);
});

function authenticateUser (username, password){

}

