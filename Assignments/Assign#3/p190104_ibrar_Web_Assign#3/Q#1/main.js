function isCheck(){
    var num = document.getElementById('evenOdd').value;
    // alert(num);
    if((num%2) == 0){
    document.getElementById('showMssg').innerHTML = "Number "+num+"  is an even number..!";
    }
    else{
    document.getElementById('showMssg').innerHTML = "Number "+num+"  is an odd number..!";
    }
   
    if(num === ""){
    document.getElementById('showMssg').innerHTML = "";
    }
   }

   