//Basic array with players already registered to test with 
var players = [
    {
        username: 'jamie',
        password: '12345'
    },
    {
        username: 'test',
        password: '1'
    }
]
  
// Logs the player in to play the game
const login = () => {
    // Gets data from username and password and store them in their variables
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    // Loop through all the players and confrim if the username and password are correct
    for(var i = 0; i < players.length; i++) {
        if(username == players[i].username && password == players[i].password) {
            return;
        }
    }
}

// Registers a new player for the game 
const registerUser = () => {
    // Store new player's username and password
    var registerUsername = document.getElementById('newUsername').value
    var registerPassword = document.getElementById('newPassword').value

    // Store their details as a new player
    var newPlayer = {
        username: registerUsername,
        password: registerPassword
    
    }
    // Push new player to the players array
    players.push(newPlayer)
    alert("Registered Successfully")
   
}