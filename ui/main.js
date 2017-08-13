//counter code
var button=document.getElementById('button');
button.onclick=function(){
    //Make a request to counter endpoint
    var request = new XMLHttpRequest();
    //capture response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttprequest.DONE){
            //Take some action
            if(request.status===200){
                
               
    
                
            }
        }
        
    };
    //Render the variable in the correct span
   request.open('GET','http://pramgopi01.imad.hasura-app.io/counter',true); 
   request.send(null);  
};
//submit name
var nameInput = document.getElementById('name');
var name= nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
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
request.open('GET','http://pramgopi01.imad.hasura-app.io/submit-name?name='+name,true); 
   request.send(null);  
};