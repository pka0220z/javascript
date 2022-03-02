//function
//fundamental building block in the program
//프로그램을 구성하는 기본적인 빌딩 블록 
//subprogram can be used multiple times 
// 재사용 가능 
//performs a task or calculates a value


//1. Function declaration
// function name(param1, param2){ body ... return;}
// one function === one thing (하나의 함수는 한가지의 일만 하도록.. )
// naming : doSomething, command, verb (변수는 명사, 함수는 동사)
// e.g. createCardAndPoint -> createCard, createPoint(세분화)
// function is object in JS (자바스크립트에서 펑션은 오브젝트)

function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(123); // 숫자가 문자로 변환되어 출력 

//2.Parameters
//premitive parameters : passed by value
//메모리에 value가 그대로 저장되어있어서 value가 전달
//object parameters : passed by reference 
//메모리에 reference가 전달

function changeName(obj){
    obj.name = 'coder';
}

const ellie = { name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = '111'){

    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4. Rest parameters ( added in ES6)
//...을 작성하면 rest parameter , 배열형태로 전달이 됨 
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream','coding','ellie'); //3개의 인자 

function printAll2(...args){
    for(const arg of args){
        console.log(arg);
    }
}
printAll2('dream','coding','ellie'); //3개의 인자 

function printAll3(...args){
    args.forEach((arg) => console.log(arg));
}
printAll3('dream','coding','ellie'); //3개의 인자 

//5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
let globalMessage = 'global';  // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable 지역변수 
    console.log(globalMessage);
    
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

//6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2);
console.log(`sum:${sum(1,2)}`);
console.log(`sum: ${result}`)


//7.Early return, early exit
//bad
function upgradeUser(user){
    if(user.print > 10){
        //long upgrade logic...
        //가독성이 떨어짐 
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic..
    //조건이 맞을때만 필요한 로직 실행 
}

//8. Function expression
//a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.
//function expression은 함수에 할당된 다음부터 호출이 가능 
const print = function (){
    console.log('print');
}

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//9.Callback function using function expression
//두가지의 함수를 전달해서 상황에 맞는 함수를 실행하는것이 콜백 
//두가지의 콜백 펑션이 파라미터로 전달
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
} 

//annymous function
const printYes = function (){
    console.log('yes!');
};

//named function
//better debuggin in debugger's stack traces
//recursions
const printNo = function print(){
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//arrow function
//always anonymous
/* const simplePrint = function(){
    console.log('simplePrint');
} */

const simplePrint =() => console.log('simplePrint');

/* const add = function(a,b){
    return a+b;
}
 */

const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    return a*b;
};

//IIFE : immediately Invoked Function Expression

(function hello(){
    console.log('IIFE')
})();

//function calculate(command, a, b)
//command : add, substract, devide, multiply, remainder 

function calculate(command,a,b){
    if(command === '+'){
        add2();
    } else if (command === '-'){
        substract();
    }else if (command === '/'){
        devide();
    }else if (command === '*'){
        multiply();
    }else if(command === '%'){
        remainder();
    }
} 

const add2 =(a,b) => console.log(a+b);
add2(2,3);

const substract = (a,b) => console.log(a-b);
substract(2,3);

const devide = (a,b) => console.log(a/b);
devide(4,2);

const multiply = (a,b) => console.log(a*b);
multiply(2,5);

const remainder = (a,b) => console.log(3%2);
remainder(2,3);
