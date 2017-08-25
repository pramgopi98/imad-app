
//submit username/password to login.
 
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRquest(); 
//make a request to the server and send the name.
//Capture a list of names and render it as a list.
request.onreadystatechange = function(){
        if(request.readyState===XMLHttprequest.DONE){
            //Take some action
            if(request.status===200){
               alert('Logged in successfully!');
                }
                else if (request.status===403){
                    alert('Username/Password is incorrect');
                   }
                   else if(request.status===500){
                       alert('Something went wrong in the server');
                   }
                   


}
};
   var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
  
   request.open('POST','http://pramgopi01.imad.hasura-app.io/login',true); 
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username:username,password:password}));  
};