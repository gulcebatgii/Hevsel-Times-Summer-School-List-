const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButon = document.getElementById('buton');
submitButon.addEventListener('click', (event) => {
    const username = usernameInput.value; 
    const password = passwordInput.value; 
    authenticateUser (username, password);
})
function authenticateUser(username, password) {
    if (username == "GulKarenAca" && password == "JTLE32OX127275QJ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "AdanurNas" && password == "207B8MM46DAMIOY0") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "YigitEfeNas" && password == "N84OX2XD0BW84BXQ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");    
    } else if (username == "PoyrazBahcivan" && password == "XG3U8PEAG3HPH6NL") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "ArdaBoraKarahan" && password == "Y6W0409Y63UPHF0V") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BedirhanAtabay" && password == "9GZLWRDB1W0X7X1Y") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BejanYilmaz" && password == "4D0CTRA0AO94L9D3") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "ElifGulceBatgi" && password == "HN3OHJEJ4UQ6JSLU") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "EzgiCakirgoz" && password == "SRSHWTIYS7ZVQ5LD") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "YeldaNazUsal" && password == "S656LF0ZKF6F299B") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "CemilYildiz" && password == "BT2TT6JUN850OV8Y7B91") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "ZeryaAslan" && password == "JAUEU3KDG58L4V3BZ6IU") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "AdarOzalkak" && password == "ICC1D67LF3QXYAPVJ3KN") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BercimBadeEren" && password == "H24LH9D7RVN0MX13WGH4") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BarisCavus" && password == "G2AVAZ35QLR597J1GM2R") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "DuruDeger" && password == "CTQCKS263ZY6WMTC9SHS") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "MuhammedEminAcar" && password == "91MG4UVFNWSUVA8VB25P") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "MuhammedEminYasul" && password == "85BA5D95PLP6L6OH9T4H") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "EvraHaspolat" && password == "X8X2VXA3NJP46FS7RUP4") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "HariyeHejaEsen" && password == "4I5E6R2523OXWNV1TG4Y") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "JirDaraAkcan" && password == "BT2ABXA8S00KE78Y1M4B") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");  
    } else if (username == "JiyanTekay" && password == "L8W1K47YQB7M7GKDMA0S") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "KeremMuldur" && password == "03Q21Z85IXDV5BEDEZ76") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "ArdaKizilkaya" && password == "Z1JD380PRN9P35DHIC0N") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");  
    } else if (username == "MiranDeniz" && password == "E74I2GTDPD670JGAXHCB") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "SaryaGulec" && password == "15K2W2DVVL3Z4L6NB3SG") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "YeldaNazUsal" && password == "J6UJG930A1RJLJC0KS4S") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");  
    } else if (username == "ArdilUlucay" && password == "RCD1GFWNX85DALLUM6KP") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");    
      } else if (username == "YusufDenizKuten" && password == "8AG18TZRJFHTVBI306TJ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");          
    } else{
        localStorage.setItem('authenticated', 'false');
    }
}

