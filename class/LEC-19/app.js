 var a =document.getElementById("start");
 console.log(a);
 console.dir(a);
 a.style.background="red";
 a.style.border=" 2px solid black";
 a.style.padding="20px";

 var b= documnet.getElementsByClassName("items");
 console.log(b);
 console.dir(b);

 b[0].style.color="green";
 for(let lists of b){
    lists.style.color="blue";
 }
