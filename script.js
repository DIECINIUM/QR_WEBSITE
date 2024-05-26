
function genqr(){
     var gapi="https://api.qrserver.com/v1/create-qr-code/?size=";
     var myimg=document.getElementById("image") ;
     var mytext=document.getElementById("text0").value ;
     var mysize=document.getElementById("size").value ;
   
       if(mytext!==""){
        myimg.src=gapi+mysize+"x"+mysize+"&data="+mytext ;
          
}
       else{
        alert("ENTER THE TEXT  :)") ;
       }
     

}