import { sum } from './calc.js';
function printMessage(msg) {
    console.log("Message: " + msg);
}
printMessage('Hello, TypeScript');
var total = sum(100, 200, 300);
console.log("Total: " + total);
