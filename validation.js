const { check } = require('express-validator');
//line 1 imports the check function from the express-validator file
//the check is used to validate rules in a http request

exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
//line 5 exports a array named signupValidation
//line 6 checks the name and the methods ensures that the field is not empty
//line 6 also checks if validation fails 'name is required'
//line 7 checks the email, with the methods isEmail validates if the email is a valid email
//normaliseEmail method is used to remove dots in the email username. normailze the email.
//line 7 if the validation fails then the error message woould be the second string for email.
//line 8 checks the password, with the methods its asking for the password to be 6 characters long
//if the password validation doesnt work then it would show the error message.

exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
//same thing ith the login. it is the same as the signup

//line 19 exports a array named loginValidation
//line 20 checks the email and with the methods 
//isEmail checks if the email is valid
//normalizeEmail checks if the email is normalize by removing dots
//if loginvalidation of the email fails then the error message will appear
//line 21 checks the password and its methods
//line 21 isLength checks if the passwith is 6 characters long
//if the password isnt then it would appear the error prompt 