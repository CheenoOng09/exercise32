// main.js
const addBinary = (num1, num2) => {
    const decimalSum = parseInt(num1, 2) + parseInt(num2, 2);
    return decimalSum.toString(2);
};

const addHexadecimal = (num1, num2) => {
    const decimalSum = parseInt(num1, 16) + parseInt(num2, 16);
    return decimalSum.toString(16);
};

const userInput = prompt('Enter "bin" for binary addition or "hex" for hexadecimal addition: ');

if (userInput === 'bin' || userInput === 'hex') {
    const num1 = prompt(`Enter the first ${userInput} number: `);
    const num2 = prompt(`Enter the second ${userInput} number: `);

    if (!/^[0-1]+$/.test(num1) && userInput === 'bin' || !/^[0-9A-Fa-f]+$/.test(num1) && userInput === 'hex') {
        alert('Invalid number entered!');
    } else if (!/^[0-1]+$/.test(num2) && userInput === 'bin' || !/^[0-9A-Fa-f]+$/.test(num2) && userInput === 'hex') {
        alert('Invalid number entered!');
    } else {
        let result;
        if (userInput === 'bin') {
            result = addBinary(num1, num2);
        } else {
            result = addHexadecimal(num1, num2);
        }

        alert(`The result of ${num1} + ${num2} is: ${result}`);
    }
} else {
    alert('Invalid addition type!');
}
