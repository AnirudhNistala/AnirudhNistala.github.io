const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Create a request variable and assign a new XMLHttpRequest object to it.
const Http = new XMLHttpRequest();
const client_id = '9447a079501c4dfbb1d668e02b5a1783';
const client_secret = '21c2b41f671047a6b9c91a485b136c54';
const redirect_uri = 'https://anirudhnistala.github.io';
const url='https://accounts.spotify.com/authorize?client_id='+ client_id +
    '&response_type=code&redirect_uri=' + redirect_uri +
    '&scope=user-read-private%20user-read-email&state=34fFs29kd09';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
};

