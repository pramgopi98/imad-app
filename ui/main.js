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
                var counter=request.responseText;
                counter=counter+1;
                var span= document.getElementById('count');
                span.innerHTML = counter.toString();
    
                
            }
        }
        
    };
    //Render the variable in the correct span
   request.open('GET','http://pramgopi01.imad.hasura-app.io/counter',true); 
   request.send(null);  
};
