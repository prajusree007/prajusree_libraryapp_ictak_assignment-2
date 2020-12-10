var status=1;
function vform(){

    regnm=/^([A-Za-z\.\-]+)?$/
    // var s1=0;
    var nm=document.getElementById("name1");
    var author=document.getElementById("author");
    var genre=document.getElementById("genre");
    var error=document.getElementById("error") ;
    
    if(nm.value==""){
        document.getElementById("lb1").style.color="red";
        document.getElementById("lb1").innerHTML='Enter name';
        status=0;
       }             

       else{
            let regnm=/^([A-Za-z\.\-]+)?$/
            if(regnm.test(nm.value)){
               document.getElementById("lb1").innerHTML='';
               }
            else{
               document.getElementById("lb1").innerHTML='Invalid';
               status=0;
               }
           }
    

     if(author.value==""){
        document.getElementById("lb2").style.color="red";
        document.getElementById("lb2").innerHTML='Enter author name';
        status=0;    
        }
  
        else{
            let regct=/^([A-Za-z\.\-]+)?$/
            if(regct.test(author.value)){
               document.getElementById("lb2").innerHTML='';
               }
            else{
               document.getElementById("lb2").innerHTML='Invalid';
               status=0;
               }
           }

           if(genre.value==""){
            document.getElementById("lb4").style.color="red";
            document.getElementById("lb4").innerHTML='Enter genre';
            status=0;    
            }
      
            else{
                let regct=/^([A-Za-z\.\-]+)?$/
                if(regct.test(genre.value)){
                   document.getElementById("lb4").innerHTML='';
                   }
                else{
                   document.getElementById("lb4").innerHTML='Invalid';
                   status=0;
                   }
               }

    if(status==1){
        return true;
       }
    else{
        return false;
        }
    
}