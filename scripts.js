var userInt = document.querySelector('#value');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var DEL = document.querySelector('#DEL');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var add = document.querySelector('add');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var SUB = document.querySelector('sub');
var period = document.querySelector('#period');
var zero = document.querySelector('#zero');
var DIVIDE = document.querySelector('#div');
var reset = document.querySelector('#times');
var Reset = document.querySelector('#RESET');
var equals = document.querySelector('.submit')
var theme1 = document.querySelector('#theme1')
var theme2 = document.querySelector('#theme2')
var theme3 = document.querySelector('#theme3')
let firstNum = '';

theme1.addEventListener('click', () => {
    document.querySelector('body')
        .setAttribute('data-theme', 'theme1')



})
theme2.addEventListener('click', () => {
    document.querySelector('body')
        .setAttribute('data-theme', 'theme2')
})
theme3.addEventListener('click', () => {
    document.querySelector('body')
        .setAttribute('data-theme', 'theme3')
})

try {

    var numbers = (props) => {
        userInt.value += (props);
    }
    var operators = (params) => {
        userInt.value += (params);
    }

    DEL.addEventListener('click', () => {
        result = (userInt.value);
        len = result.length;
        deleteNum = result.substring(0, len - 1)
        userInt.value = deleteNum
    })

    submit.addEventListener('click', () => {
        result = eval(userInt.value);
        console.log(result);

        userInt.value = result;
    })
} catch (error) {
    console.log(`oops internal server error`, error);
}