<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="buton">Login</button>

    <script>
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const submitButton = document.getElementById('buton');

        // Store username-password pairs in an object
        const users = {
            "GulKarenAca": "JTLE32OX127275QJ",
            "AdanurNas": "207B8MM46DAMIOY0",
            "PoyrazBahcivan": "XG3U8PEAG3HPH6NL",
            "YigitEfeNas": "N84OX2XD0BW84BXQ",
            "AhmetTunaBalci": "OLO42XZ1DW3DJ10A",
            "ArdaBoraKarahan": "Y6W0409Y63UPHF0V",
            "BedirhanAtabay": "9GZLWRDB1W0X7X1Y",
            "BejanYilmaz": "4D0CTRA0AO94L9D3",
            "DilaKurbanoglu": "515TXW5KQ7KBL4ZT",
            "DilvinLacin": "EDGF5A6Z8YGZKUI8",
            "ElifGulceBatgi": "HN3OHJEJ4UQ6JSLU",
            "EzgiCakirgoz": "SRSHWTIYS7ZVQ5LD",
            "IklimToklu": "UVALQHJ361RVNAQQ",
            "Sara Bozyel": "YNF4Q4NC0AEZJ865",
        };

        submitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the form from submitting

            const username = usernameInput.value;
            const password = passwordInput.value;

            // Check if the entered username exists in the 'users' object
            if (users.hasOwnProperty(username) && users[username] === password) {
                alert("Login successful!"); // Display a success message
            } else {
                alert("Login failed. Please check your credentials."); // Display an error message
            }
        });
    </script>
</body>
</html>
