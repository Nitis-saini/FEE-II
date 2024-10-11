// promise represents a future events. Technically they are objects. By default promises are in pending states. Promise state-pending, fulfilled, reject: 
// 1. how to create promises:
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let like =true;
        if(like){
            resolve("yeah, she likes you");
        }
        else{
            reject("sonam bewafa hai");

        }
        resolve("This is a resolve.")
    },2000);
});
p.then((value)=>{
    console.log(value);
},(err) =>{
    console.log(err);})





