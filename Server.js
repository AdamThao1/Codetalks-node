const createError = require('http-errors'); //a module to create http errors
const express = require('express'); //proves a set of tools to build web applications
const path = require('path'); //built in module that handles the file path
const bodyParser = require('body-parser'); // parse the request of body in different formats
const cors = require('cors'); //a module that enables cross origin resource sharing in application
const { signupValidation, loginValidation } = require('./validation.js'); //imports validation arrays from the file
const app = express(); //app creates a instance of the express aplication

app.use(express.json()); //parse the request body as JSON
app.use(bodyParser.json()); //same thing as line 9 but its a alternative
app.use(bodyParser.urlencoded({//parse though the body in URL-encoded format
   extended: true 
}));
app.use(cors());//enables cross origin resource sharing, allows request from different origins

app.get('/', (req, res) => { // get a request from / 
   res.send('Node js file upload rest apis'); // sends a response 
});

app.post('/register', signupValidation, (req, res, next) => { //posts a request from the /register path
// use the signupValidate array for the reigster
//if request passes through the validation then the route would execute
  // your registration code
});

app.post('/login', loginValidation, (req, res, next) => {//post a request from /login path
    //uses loginValidate for the requests
  // your login code
});

// Handling Errors
app.use((err, req, res, next) => { //usage is handling erros
   // console.log(err);
   err.statusCode = err.statusCode || 500; //sets error status code to 500
   err.message = err.message || "Internal Server Error"; // massages the error has occured
   res.status(err.statusCode).json({ //sets the status then calls the json to indicate a message
     message: err.message,
   });
});

app.listen(3000,() => console.log('Server is running on port 3000'));
//app.listen is a method
//binds the server to port 3000
//calls back to the app listen and consolelogs the message