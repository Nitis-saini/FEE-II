let url="https://catfact.ninja/fact";

fetch(url).then((resolve)=>{
    //console.log(resolve);
   // console.log(resolve.json());
   resolve.json().then((value)=>{
    console.log(value);
    console.log(value.fact);
   })
})
.catch((err)=>{
    console.log(err);
})