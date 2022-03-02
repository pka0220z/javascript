//1. String concatenation
console.log('my'+' car');
console.log('1'+2);
console.log(`String literals:
'''
1+2=${1+2}`);
console.log("ellie's \n\tnote");


//2.Numeric operators

//3.Increment and decrement operators
let counter = 2;
//counter = counter + 1;
// preIncrement = counter;
const preIncrement = ++counter;
console.log(preIncrement);
console.log(counter)

const postIncrement = counter++;
console.log(postIncrement);
console.log(counter);
// preIncrement = counter;
//counter = counter + 1; 

//4.Assignment operators
let x = 3;
let y = 5;
x += y; // x=x+y
x -= y; // x = x-y

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6.Logical operators 
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true가 나오면 멈춤 (finds the first truthy value)
// or에서는 함수를 제일 마지막에 배치하는것이 효율적임 
console.log(`or:${value1 || value2 || check()}`);
console.log(`or:${value1 || true || check()}`);

// &&(and), 셋 다 true일때 true
console.log(`and:${value1 && true && check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        console.log('🥰');
    }
    return true;
}

//7. Equality
const StringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사)
console.log(StringFive == numberFive);
console.log(StringFive != numberFive);

// === strict equality, no type conversion (타입을 신경써서 검사. 타입이 다르면 다름)
console.log(StringFive == numberFive);
console.log(StringFive != numberFive);

//object equality by reference 
const ellie1 = {name : 'ellie'}; 
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); //같은 데이터, 메모리는 각각 다른 레퍼런스가 들어있고 서로 다른 오브젝트를 가르킴 
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log( 0 == false); //true
console.log( 0 === false); //false 
console.log( ' ' == false);//true
console.log( ' ' === false);//false
console.log( null == undefined); //true
console.log( null === undefined);//false

//8. Conditional poerators : if
// if, else if , else

const name = 'ellie';

if(name === 'ellie'){
    console.log('Welcome ellie');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('Unknown');
}

//9. Ternary operator:?
//condition ? value1 : value2
console.log(name === 'ellie'?'yes':'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS

const browser = 'Chrome';
switch ( browser ){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break
}

//11. Loop(반복문)
//while loop, while the condition is truthy
//body code is executed

let i = 3;

while (i > 0){
    console.log(`while:${i}`);
    i--;
}

//do while loop
// body code is execyted first, then check the condition.

do{
    console.log(`do while:${i}`);
    i--;
}while ( i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for:${i}`);
}

for(let i =3; i > 0; i = i -2){
    console.log(`inline variable for:${i}`)
}

//nested loops -> 되도록 피하는것이 좋음 
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i : ${i}, j : ${j}`)
    }
}
// 짝수출력 
// ver1
for (k = 0; k <= 10; k++){
    if (k != 0 && k % 2 == 0){
        console.log(k);
        continue;
    }
}
// ver2
for(let i = 0; i < 11; i++){
    if (i % 2 ===0){
        console.log(`q1.${i}`)
    }
}

// 0부터 10까지 숫자 중 i가 8까지만 출력

for (k = 0; k <= 10; k++){
    
    if (k > 8){
        break;
    }
    console.log(k);
}
