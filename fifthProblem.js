var mysql=require('mysql');// grabs the mysql module

var connection=mysql.createConnection({ 
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});

//line 3 is a method that takes a object as a parameter and configures details to connect
//configuration is the host, user, password,database

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
}); 
//line 13 connects the mysql database 
//connect method takes a callback function and exectues once connection establish or eroor hapens
//if the error is truth then it will log the error. if not then logs the connected 

module.exports = connection;
//this expeorts the connection and allows apps to perform database operations  
//using the connection