const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButon = document.getElementById('buton');

submitButon.addEventListener('click', function () {
    const username = usernameInput.value; 
    const password = passwordInput.value; 
    authenticateUser (username, password);
});
function authenticateUser (username, password){
    console.log ("auuuuuuu");
    if(username == "HevselSSL" && password == "q9w12E14M218120502") {
        console.log ("if");
        window.location.replace ("ssl.html");
    }
}
