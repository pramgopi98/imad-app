//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //Make a request to counter endpoint
    var request = new XMLHttpRequest();
    //capture response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
              var counter=request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
               
    
                
            }
        }
        
    };
    //Render the variable in the correct span
   request.open('GET','http://pramgopi01.imad.hasura-app.io/counter',true); 
   request.send(null);  
};
//submit name
 
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRquest(); 
//make a request to the server and send the name.
//Capture a list of names and render it as a list.
request.onreadystatechange = function(){
        if(request.readyState===XMLHttprequest.DONE){
            //Take some action
            if(request.status===200){
               var names = request.responseText;
               names=JSON.parse(names);
               var list = '';
               for(var i =0;i<names.length;i++){
            list+='<li>'+names[i]+'</li>';
     }
var ul = document.getElementById('namelist');
ul.innerHTML = list; 
               
    
                
            }


}
};
   var nameInput = document.getElementById('name');
   var name= nameInput.value;
  
   request.open('GET','http://pramgopi01.imad.hasura-app.io/submit-name?name='+name,true); 
   request.send(null);  
};