    let display = document.getElementById('display');
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let clearButton = document.getElementById('clear');
    let calculateButton = document.getElementById('calculate');
    let num7=document.querySelector(".number7")
    let num8=document.querySelector(".number8")
    let num9=document.querySelector(".number9")
    let addBtn=document.querySelector(".operator-add")
    console.log(addBtn);
    console.log(num7);

    // numbers.forEach(function(button) {
    //     button.addEventListener('click', function() {
    //         display.value += button.textContent;
    //         console.log("display value is",display.value);
    //     });
    // });
    num7.addEventListener('click', function() {
        display.value += num7.textContent;
        console.log("display value is",display.value);
    });
    num8.addEventListener('click', function() {
        display.value += num8.textContent;
        console.log("display value is",display.value);
    });
    num9.addEventListener('click', function() {
        display.value += num9.textContent;
        console.log("display value is",display.value);
    });
    addBtn.addEventListener('click', function() {
        display.value += addBtn.textContent;
        console.log("display value is add",display.value);
    });
    calculateButton.addEventListener("click",()=>{
        console.log("inside clear");
        display.value=eval(display.value)
    })

    // operators.forEach(function(button) {
    //     button.addEventListener('click', function() {
    //         display.value += button.textContent;
    //         console.log("display value is",display.value);
    //     });
    // });

    clearButton.addEventListener('click', function() {
        display.value = '';
    });

    // calculateButton.addEventListener('click', function() {
    //     try {
    //         display.value = eval(display.value);
    //     } catch (e) {
    //         display.value = 'Error';
    //     }
    // });
  

    
