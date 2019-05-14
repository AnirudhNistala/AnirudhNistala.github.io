
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.spotify.com/v1/artists/{6rqhFgbbKwnb9MLmUQDhG6}', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    }

// Send request
request.send()
