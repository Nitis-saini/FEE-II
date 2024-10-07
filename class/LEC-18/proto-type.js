var person1 ={
    name:"nitish",
    age:25,
};
console.log(person1);
var person2 = Object.create(person1);
console.log(person2);
console.log(person2.name);
person2.name="    f";
var person3= Object.create(person2);
console.log(person3. __proto__);