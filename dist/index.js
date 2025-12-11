import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
let total = 100;
let name = 'Bob';
let isActive = false;
let empty = null;
let undf = undefined;
// let age = 10;
// age = '12';
//# sourceMappingURL=index.js.map