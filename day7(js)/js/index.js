"use strict"; //매개변수 활용에서 많이씀. but type script 개발로 많이 사용하진않음.


// alert("js파일 안 쪽");

//여긴 주석입니다. 한줄 주석

// 여러줄 주석을 시작합니다.
// 단축기 cmd+k+c/cmd+k+u
// cmd+/ 도 가능




//! ! ! ! ! !String ! ! ! ! ! ! 
let myName = "김윤비"
// = 오른쪽에 있는애를 왼쪽에 집어넣겠다, == 두개일경우 오른쪽과 왼쪽은 같은것이다.
let email = "gmdalsrb@naver.com"
let hellohi = `안녕하세요 제 이름은 ${myName} 입니다.` 
//문자는 구글 콘솔창에 회색으로 뜬다.

console.log(myName);
console.log(email);
console.log(hellohi);




//! ! ! ! ! !Number ! ! ! ! ! ! 
let height = 163;
let opacity = 0.5;
//숫자는 글자가 아니기때문에 따옴표를 쓰지않는다.

console.log(height);
console.log(opacity);
//숫자는 콘솔창에 파란색으로 뜬다.

console.log(height+opacity);

// let height = "163";
// let opacity = "0.5";

// console.log(height+opacity);
// console.log(height-opacity); // - 일경우 문자를 숫자처리를해서 저절로 - 로 처리함.




//! ! ! ! ! !Boolean ! ! ! ! ! ! 
let checked = false; // 0
let isShow = true; // 1

console.log(checked);
console.log(isShow);




//! ! ! ! ! !Undefined ! ! ! ! ! !  <-값이 할당되지 않은 상태를 표기(많이안씀,최대한 피하는게 좋음)
let undef;
console.log(undef);
undef = "yunbee";
console.log(undef);




//! ! ! ! ! !Null ! ! ! ! ! !  <-의도된 빈 데이터, 어떤값이 의도적으로 비어있음을 의미할때사용
let empty = null;
console.log(empty);




//! ! ! ! ! !Array ! ! ! ! ! !  <-여러 데이터를 순차적으로 저장
let fruits = ["banana", "cherry", "orange", "melon",null];
console.log(fruits[2]);
console.log(fruits[4]);
console.log(fruits[5]);




//! ! ! ! ! !Object ! ! ! ! ! !  <-여러 데이터를 key : value 의 형태로 저장
// let yunbee = {
//     name: "김윤비",
//     age: 31,
//     hoby: ["game","all ott"],
//     isOld: false,
// }

// console.log(yunbee.name);
// console.log(yunbee.age);
// console.log(yunbee.hoby);
// console.log(yunbee.isOld);



//문자와 변수를 동시에 선언하기
let myNameis = 123;
console.log("안녕하세요 저는", myNameis, "입니다");
console.log("안녕하세요 저는"+myNameis+"입니다");
console.log(`안녕하세요 저는 ${myNameis} 입니다`);





//! ! ! ! ! !변수 ! ! ! ! ! !  (재할당이 가능한 변수)
let box = 123;
console.log(box);

box = 789;
console.log(box);

box = "BOX";
console.log(box);





//! ! ! ! ! !변수2 ! ! ! ! ! !  (재할당이 불가능한 변수, 값이 변할리가 없는 애들 const 로 선언)
const box2 = 333;
console.log(box2);

// box2 = 999; //이럴경우 에러남.





//! ! ! ! ! !예약어 ! ! ! ! ! !   <-특별한 의미를 담고있어서 변수나 함수로 선언이 불가한 언어
// var name = "irene";
// var name = "kyb";

// let name = "irene";
// let name = "kyb";

// console.log(name);

//var <-이제 쓰지않음. var 대신 let을 씀.
// let nameis = "kyb"
// if(nameis == "kyb") {
//     var result = true;
// } else {
//     var result = false;
// }


// console.log(result);

// let nameis = "kyb"
// if(nameis == "kyb") {
//     let result = true;
// } else {
//     let result = false;
// }

// console.log(result);





//! ! ! ! ! !함수 ! ! ! ! ! ! 
function helloKdt() {
    alert("ㅎㅇㅎㅇ");
}

//helloKdt (); <-함수 호출

function returnFunc () {
    return 123;
}

// let num = returnFunc();
// console.log(num);
// console.log(returnFunc());

function hello() {
    console.log("hello");
}

let world = function () {
    console.log("world");
}

hello();
world();


//object 의 method
const ybee = {
    name: "kyb",
    isMarried: false,
    gender: "female",

    //method
    getGender: function () {
        return this.gender;
    },
    getName: function () {
        return this.name;
    },
    doesHeMarried: function () {
        return this.isMarried;
    },
}

let hisname = ybee.getName();
console.log(hisname);
console.log(ybee.doesHeMarried());
console.log(ybee.getGender());


//! ! ! ! ! 매개변수 ! ! ! ! !
// function sum(a, b) {
//     return a+b;
// }

// let a = sum(10, 20);
// console.log(a);
// console.log(sum(15,13));


// 실습
// function sum(a,b) {
//     return a*b;
// }

// let a = sum(2, 3);
// console.log(a);
// console.log(sum(3,4));



//on click
function onClick() {
    alert("clicked");
}