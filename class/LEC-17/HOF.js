function printname(func,num){
    for(let i=0;i<=num;i++){

        func();
    }
}
let myname= function(){
    console.log("Nitish")
};
printname(myname,10);