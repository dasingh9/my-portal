function addNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let result = num1 + num2;
    document.getElementById("result").innerText = result ;
}

function multiplyNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let result = num1 * num2;
    document.getElementById("result").innerText = result;
}