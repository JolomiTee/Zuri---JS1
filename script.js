function calculator() {
    var first = prompt('First Number: ');
    var second = prompt('Second Number: ');
    var operator = (prompt('Choose your operator: ' + " +,  -,  *,  /"))

    if (operator === '+') {
        alert('The answer is: ' + first + second);
    } else if (operator === '-') {
        alert('The answer is: ' + first - second);
    } else if (operator === '/') {
        alert('The answer is: ' + first / second);
    } else if (operator === '*') {
        alert('The answer is: ' + first * second);
    }else{
        alert('this is invalid!')
    }
}

calculator();