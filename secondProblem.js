const {readFile, writeFile} = require('fs');
//line 1 imports the readfile & writefile built in the fs module

console.log('start'); // starts a message
//---------------------------------------------------------
readFile('./content/first.txt','utf8', (err, result)=> {
   if (err) {
       console.log(err);
       return 
   }
   const first = result;
   console.log(result);
//line 6 reads a file called "first.txt" and grabs a error and result parameter
//line 7-10 if theres a error in reading the file, it would be a error. then return the callback function
//line 11 assigns a variable and grabs the result
//line 12 logs the result
//---------------------------------------------------------
   readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result);
       //line 18 reads the file "second.txt" and have error and result as parameters
       //line 19-22 if theres a error reading the file, return the callback function
       //line 23 assigns a variable and grab the result
       //line 24 logs the result
       //---------------------------------------------------------
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');
       }
       //line 30 writes the file on a new file called "result-async.txt"
       //line 30 also grabs the first and second variable and put it in the new file
       //line 31-34 if a error occurs during the writing process then log error and return the callback
       //line 35 with console logs the message
       );
   })
});

console.log('starting next task');
//logs the next task