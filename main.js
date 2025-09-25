const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const BTN_SEND = document.getElementById('send');
const BTN_RESET = document.getElementById('reset');

num1Input.addEventListener('input', () => {
    if(num1Input.value!=="" && num2Input.value!==""){
        BTN_SEND.disabled=false;
        BTN_SEND.classList.remove('buttonsendjs');
    } else {
        BTN_SEND.disabled=true
        BTN_SEND.classList.add('buttonsendjs');
    }
})

num2Input.addEventListener('input', () => {
    if(num1Input.value!=="" && num2Input.value!==""){
        BTN_SEND.disabled=false
        BTN_SEND.classList.remove('buttonsendjs');
    } else {
        BTN_SEND.disabled=true
        BTN_SEND.classList.add('buttonsendjs');
    }
});

BTN_SEND.addEventListener('click', () => {
    const operation = document.getElementById("operation").value;
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter two numbers");
        return
    }

    let result;

    switch (operation) {
        case "sumar":
            result = num1 + num2;
            break
        case "restar":
            result = num1 - num2;
            break
        case "multiplicar":
            result = num1 * num2;
            break
        case "dividir":
            if (num2 === 0){
                alert("It cannot be divided by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation");
            break;
            return;
    }
    alert(`The result of the operation is: ${result}`);
})

BTN_RESET.addEventListener('click', () => {
    num1Input.value="";
    num2Input.value="";
    BTN_SEND.disabled= true;
    BTN_SEND.classList.add('buttonsendjs');
})
