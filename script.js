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
        window.location.replace("list/ssl.html");
    } else if (username == "GulKarenAca" && password == "JTLE32OX127275QJ") {
        window.location.replace("list/ssl.html");
    } else if (username == "AdanurNas" && password == "207B8MM46DAMIOY0") {
        window.location.replace("list/ssl.html");
    } else if (username == "PoyrazBahcivan" && password == "XG3U8PEAG3HPH6NL") {
        window.location.replace("list/ssl.html");
    } else if (username == "YigitEfeNas" && password == "N84OX2XD0BW84BXQ") {
        window.location.replace("list/ssl.html");
    } else if (username == "AhmetTunaBalci" && password == "OLO42XZ1DW3DJ10A") {
        window.location.replace("list/ssl.html");
    } else if (username == "ArdaBoraKarahan" && password == "Y6W0409Y63UPHF0V") {
        window.location.replace("list/ssl.html");
    } else if (username == "BedirhanAtabay" && password == "9GZLWRDB1W0X7X1Y") {
        window.location.replace("list/ssl.html");
    } else if (username == "BejanYilmaz" && password == "4D0CTRA0AO94L9D3") {
        window.location.replace("list/ssl.html");
    } else if (username == "DilaKurbanoglu" && password == "515TXW5KQ7KBL4ZT") {
        window.location.replace("list/ssl.html");
    } else if (username == "DilvinLacin" && password == "EDGF5A6Z8YGZKUI8") {
        window.location.replace("list/ssl.html");
    } else if (username == "ElifGulceBatgi" && password == "HN3OHJEJ4UQ6JSLU") {
        window.location.replace("list/ssl.html");
    } else if (username == "EzgiCakirgoz" && password == "SRSHWTIYS7ZVQ5LD") {
        window.location.replace("list/ssl.html");
    } else if (username == "IklimToklu" && password == "UVALQHJ361RVNAQQ") {
        window.location.replace("list/ssl.html");
    } else if (username == "SaraBozyel" && password == "YNF4Q4NC0AEZJ865") {
        window.location.replace("list/ssl.html");
    }
    else if (username == "YeldaNazUsal" && password == "S656LF0ZKF6F299B") {
        window.location.replace("list/ssl.html");
    }
}
