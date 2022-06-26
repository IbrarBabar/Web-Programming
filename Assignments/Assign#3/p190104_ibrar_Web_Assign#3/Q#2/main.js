var x,y,chr;
const number = prompt("Please enter number");
for(x=0; x <=number; x++)
{
   for (y=0; y < x; y++)
    {
        chr=chr+("*");     
    }
 console.log(chr);
 chr='';    
}

