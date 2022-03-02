//1. Use strict 
// 자바스크립트는 굉장히 유연한 언어 (JavaScript is very flexible)
// flexible === dangerous
// added ECMAScript 5 
// use strict를 선언하지않고 사용하면 정의되지 않은 변수가 에러가 발생되지않음 
'use strict';


//2.variable(변수)
//let(mutable)(added in ES6)
let globalName = 'global name';
{
    let name = 'Daisy';
    console.log(name);
    name='Hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting (어디에 선언했는지에 상관없이 항상 제일 위로 선언을 끌어올려줌)
//move, declaration from bottom to top

console.log(age);
age=4;
console.log(age);
var age;

// age2 = 4;
// let age2;
// console.log(age2);

//var -> has no block scope(블록 스콥이 없음)
{
    age3 = 3;
    var age3;
}
console.log(age3);

//3.Constants(Immutable) -> 변경이 불가 
//값을 할당한 다음에 변경되지 않는 데이터를 쓰지 않는것이 좋음
//1. 보안상의 이유(security)
//2. thread safety 
//3. 코드 변경에 대한 실수 방지 (reduce human mistakes )

const daysInWeek = 7;

//immutable data types : primitive types, 데이터 자체를 변경하는것은 불가 , object 변경 불가
//mutable data types : all objects by default are mutable in JS(모든 object는 변경 가능)

//4.Variable types
// 자바 스크립트는 숫자 타입이 하나(number)

const count = 17; //integer
const size = 17.1; // deximal number
console.log(`value: ${count}, type:${typeof count}`);
console.log(`size: ${size} ,typeof:${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt
const bigInt = 1234566781234566771234567671234455676n;
console.log(`value:${bigInt}, type:${typeof bigInt}`);

//string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}`; //template literals(string)
console.log(`value:${helloBob}, type:${typeof helloBob}`);

//boolean
//false : 0,null,undefined, NaN,''
//true :any other value

const canRead = true;
const test = 3 < 1;
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

//null 
//empty 값으로 할당 
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

//undefined
//선언은 되었지만 아무것도 값이 지정되어있지 않음 
let x ;
console.log(`value:${x}, type:${typeof x}`);

//symbol, 고유한 식별자가 필요, 동시 다발적으로 일어나는 코드에서 우선순위를 줄때 고유한 코드가 필요할때(create unique identifiers for objects)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2 );
console.log(`value:${gSymbol1.description}, type:${typeof gSymbol1}`);
//symbol은 .description을 이용해서 String으로 변환해서 사용 

//5. Dynamic typing:dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
text = 1;
console.log(`value:${text}, type:${typeof text}`);
text = '7'+5;
console.log(`value:${text}, type:${typeof text}`);
text = '8'/'2';
console.log(`value:${text}, type:${typeof text}`);