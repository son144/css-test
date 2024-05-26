// function personalInfo(){
//     console.log(`my name is ${this.firstName} and my age is ${this.age}`);
//         }

// function about (hobby,favMusician){
//     console.log(`my name is ${this.firstName} and my age is ${this.age} my hobby is ${hobby} and my fav musician is ${favMusician}`);
//         }
// const person={
//     firstName:"sonal",
//     age:24,
  
// }
// const person2={
//     firstName:"Rahul",
//     age:26,
    
// }
// person.about()
// person2.about()
// person.about.call(person2,'guitar','mozart')
// about.call(person)
// about.call(person2,'guitar','mozart')

// apply 
// about.apply(person2,['guitar','mozart'])

// let func=about.bind(person2,'guitar','mozart')
// func()


// let obj={
//     key1:"value1",
//     key2:"value2"
// }
// let obj2=Object.create(obj)
// console.log(obj2);
// obj2.key3="value3"
// console.log(obj2);
// console.log(obj2.key2);


// function hello(){
//     console.log("hii");
// }
// hello.prototype.abc="abc"
// console.log(hello.prototype);



// function 

// function createUser(firstName,lastName,email,age){
//     const user=Object.create(createUser.prototype)
//     user.firstName=firstName
//     user.lastName=lastName
//     user.email=email
//     user.age=age
//     return user
// }
// createUser.prototype.about=function(){
//     return`${this.firstName} is ${this.age} years old`
// }
// const user1=createUser("sonal","jaswal","sonal@gmail.com",24)
// console.log(user1);
// console.log(user1.about());


// new keyword 

function createUser(firstName,age){
    this.firstName=firstName
    this.age=age
}
createUser.prototype.about=function(){
    console.log(this.firstName,this.age);
}
// new keyword 
// 1  empty obj this={}
// 2 return this 


const user1=new createUser("sonal",21)
user1.about();