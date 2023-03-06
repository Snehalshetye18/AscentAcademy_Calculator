//This function will clear everything
function clearScreen() {
    document.getElementById("result").value = "";
}

//This function will display the entered values
function display(value) {
    document.getElementById("result").value += value;
}

//This function performs the operations and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}