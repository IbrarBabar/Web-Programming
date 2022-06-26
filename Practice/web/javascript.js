function MyFunction(){
    document.getElementById('c').innerHTML="Paragraph changed";
}
// --------------------------------------------------------
function sum(){
    let a=10,b=5;
    let c=a+b;
    document.getElementById('g').innerHTML="Sum of (a) and (b) :: "+c+".";
}
// ------------------------------------------------------
function Fun3(){
    document.getElementById('h').innerHTML="ibrar";
    document.getElementById('i').innerHTML="Babar";
}
// -------------------------------------------------------
$(document).ready(function(){
    $.fn.myFunction= function() {
    alert("this is ibrar");
    }
      $("#aaa").click(function(){
          $.fn.myFunction();
        });
    });
// ----------------------------------------------------------------

// function MyFunctioN() {
//   var x = document.getElementById("img");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

$("h1,h2,h3" ).click(function() {
    $( this ).slideUp();
  });