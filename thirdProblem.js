const getTodos = () => { //created a arrow function named getTodos
    const request = new XMLHttpRequest();
    //line 2 creates a request variable that has a XMLHtttpReq object
    //the object is a built in browser that allows http requests
   
   request.addEventListener('readystatechange', ()=>{
   //line 6 has a event listener to the XMLHttpReq object
   //line 6 is listening for the readystatechange event
   
    if(request.readyState === 4 && request.status ===200){
      console.log(request.responseText)
       }
      else if (request.readyState === 4){
        console.log('could not fetch the data');
      }
   });
   //line 10-11 if the readystate is 4 and the status is 200 then log the response
   //line 11 is indicating a successful response
   //line 13 adds a else if and if readystate is 4 but has no status then log
   //line 14 logs the message of not getting data
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
   request.send();
   }
   //line 22 sets up the request to open the object
   //line 22 The GET is a method for the HTTP and gets the url
   //line 22 requests data from the url 
   //line 23 sends the request
   
   
   
   getTodos();
   getTodos();
   //line 32-33 the function is called twice meaning there is 2 separate HTTP requests to the specified URL
// the event listener is triggered based on the readystate and status values. 