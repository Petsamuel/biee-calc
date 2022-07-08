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
let firstNum = '';

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