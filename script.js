const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButon = document.getElementById('buton');
submitButon.addEventListener('click', (event) => {
    const username = usernameInput.value; 
    const password = passwordInput.value; 
    authenticateUser (username, password);
})
function authenticateUser(username, password) {
    if (username == "HevselSSL" && password == "q9w12E14M218120502") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "GulKarenAca" && password == "JTLE32OX127275QJ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "AdanurNas" && password == "207B8MM46DAMIOY0") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "PoyrazBahcivan" && password == "XG3U8PEAG3HPH6NL") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "YigitEfeNas" && password == "N84OX2XD0BW84BXQ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "AhmetTunaBalci" && password == "OLO42XZ1DW3DJ10A") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "ArdaBoraKarahan" && password == "Y6W0409Y63UPHF0V") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "BedirhanAtabay" && password == "9GZLWRDB1W0X7X1Y") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "BejanYilmaz" && password == "4D0CTRA0AO94L9D3") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "DilaKurbanoglu" && password == "515TXW5KQ7KBL4ZT") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "DilvinLacin" && password == "EDGF5A6Z8YGZKUI8") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "ElifGulceBatgi" && password == "HN3OHJEJ4UQ6JSLU") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "EzgiCakirgoz" && password == "SRSHWTIYS7ZVQ5LD") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "IklimToklu" && password == "UVALQHJ361RVNAQQ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "SaraBozyel" && password == "YNF4Q4NC0AEZJ865") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else if (username == "YeldaNazUsal" && password == "S656LF0ZKF6F299B") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("list/ssl.html");
    } else{
        localStorage.setItem('authenticated', 'false');
    }
}

