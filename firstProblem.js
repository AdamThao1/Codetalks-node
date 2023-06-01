const {readFileSync, writeFileSync} = require('fs');
//line 1 is importing the read&write filesyncs from the fs module.

const fs = require('fs');
//line 4 imports the whole entire fs module. 

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//line 7-8 creates a variable to read the other files. 
//'utf8' this reads a text file and be returned as a string

console.log(first, second);
//console logs the variables

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);
//line 15 would add strings to a certain file, if the file dont exist it would add a new file.
//line 15 adds adds 2 variables that has files and put them together.

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
//line 19 does the same exact thing line 15 does. 
// flag; 'a' what this does it adds the content to the end of existing file than replacing the content previously
