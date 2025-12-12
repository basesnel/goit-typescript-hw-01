import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
const user = {
    name: 'Bob',
    age: 12,
};
user.age = '15';
user.name = 'Bobby';
//# sourceMappingURL=index.js.map