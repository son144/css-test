// document.body.childNodes[1].innerText="abc"
// console.log(window.document.body);
// let heading=document.getElementById("heading")
// console.dir(heading);
// let para=document.getElementsByClassName("paragraph")
// let allParas=document.getElementsByTagName("p")
// console.dir(para)
// console.dir(allParas)

// let elements=document.querySelector(".paragraph") //1st element
// console.dir(elements.tagName)

// let allElements=document.querySelectorAll("p") //1st element
// console.dir(allElements)


// console.log(document);
// console.dir(document.body.firstChild);

// get attribute 
// let div=document.querySelector("div")
// console.log(div);
// let id=div.getAttribute("id")
// console.log(id);
// console.log(div.setAttribute("id","new-box"));


// let div=document.querySelector("div")
// div.style.backgroundColor="green"

// let button=document.createElement("button")
// console.log(button);
// button.innerText="click me"
// console.log(button.innerText);


// div.append(button)
// div.prepend(button)
// div.before(button)
// div.after(button)

// let para=document.querySelector("p")
// console.log(para);
// para.remove()

// event 
// let btn1=document.querySelector("#btn1")
// console.log(btn1);
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log('btn 1 was clicked gh');
// }

// event listner 
// let btn1=document.querySelector("#btn1")
// btn1.addEventListener("click",(e)=>{
//     console.log("hii i am clicked");
// })
// const secondEvt=()=>{
//     console.log("hii i am clicked2");
// }
// btn1.addEventListener("click",secondEvt)
// btn1.removeEventListener("click",secondEvt)


// let modeBtn=document.querySelector('.mode')
// let currentMode="light"
// console.log(modeBtn);
// modeBtn.addEventListener("click",()=>{
//     if(currentMode==="light"){
//         currentMode="dark"
//         // document.querySelector("body").style.backgroundColor="black"
//         // or 
//         document.querySelector("body").classList.add("dark")
//         document.querySelector("body").classList.remove("light")

//     }else{
//         currentMode="light"
//         // document.querySelector("body").style.backgroundColor="white"
//         // or 
//         document.querySelector("body").classList.add("light")
//         document.querySelector("body").classList.remove("dark")


//     }
    
//     console.log("you are trying to change the mode of color-------",currentMode);
// })
// let input=document.querySelector(".input")
// console.log(input.value);
// const fahrenheitInput=document.querySelector("#fahrenheit")
// const celsiusInput=document.querySelector("#celsius")
// const button=document.querySelector(".btn")
// console.log(fahrenheitInput);
// console.log(celsiusInput);
// console.log(button);

// function convertToCelsius() {
//     var fahrenheitInput = document.getElementById('fahrenheit').value;
//     var celsiusOutput = (fahrenheitInput - 32) * 5 / 9;
// celsiusInput.value = celsiusOutput.toFixed(2);
// }

// function convertToFahrenheit() {
//     var celsiusInput = +document.getElementById('celsius').value;
//     console.log(typeof celsiusInput);
//     var fahrenheitOutput = (celsiusInput * 9 / 5) + 32;
//     console.log(typeof fahrenheitOutput,typeof celsiusInput);
//    fahrenheitInput.value = fahrenheitOutput.toFixed(2);
// }
// const clearAll=()=>{
//   celsiusInput.value=""
//   fahrenheitInput.value=""
// }
// celsiusInput.addEventListener("input",convertToFahrenheit)
// fahrenheitInput.addEventListener("input",convertToCelsius)
// button.addEventListener("click",clearAll)


// let  first=document.querySelector(".first")
// let  second=document.querySelector(".second")
// let res=document.querySelector(".result")
// console.log(first);
// console.log(second);
// const firstHandler=()=>{
//     console.log(first.value);
//    res.innerText=(+(first.value)+(+second.value))
//    console.log(res.innerText);
// }

// first.addEventListener("input",firstHandler)
// second.addEventListener("input",firstHandler)



// let name=document.querySelector(".name")
// let email=document.querySelector(".email")
// let password=document.querySelector(".password")
// let confirmPassword=document.querySelector(".confirm-password")
// let btn=document.querySelector(".btn")
// let para=document.querySelector(".para")
// console.log(name,email,password,confirmPassword,btn);
// const btnHandler=(e)=>{
//     e.preventDefault()
//     if(name.value.trim()===""||
//     email.value.trim()===""||
//     password.value.trim()===""||
//     confirmPassword.value.trim()===""){
//         console.log("enter all the details");
//         // para.inn
//     }else if(password.value.trim()!==confirmPassword.value.trim()){
// console.log('wrong password');
//     }else if(!(email.value.trim().includes("@"))){
//         console.log("invalid email");
//     }
//     else{
//         console.log("hii");
//     }
// }

// btn.addEventListener("click",btnHandler)






try {
    console.log('Try block');
    throw new Error('This is an error message');
  } catch (error) {
    console.log("catch",error.message)
  } finally {
    console.log('Finally block');
  }



