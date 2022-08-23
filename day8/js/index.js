// console.log(typeof null);
// console.log(typeof "핑크빈");
// console.log(typeof 77);
// console.log(typeof {});

// let obj = {
//     name: "김윤비"
// };

//object는 {} <- 요렇게 표현할 수 있다.

console.log(`${typeof 123} isn't ${typeof "핑크빈"} data type`);
console.log(`typeof를 ${typeof true} 이나 ${typeof null} 에 사용하면, ${typeof obj} 결과를 얻을 수 있습니다.`)



// let mathScore = prompt("수학 점수를 입력 하세요.");
// let engScore = prompt("영어 점수를 입력 하세요.");

// mathScore = Number(mathScore);
// engScore = Number(engScore);

// // console.log(mathScore);
// // console.log(engScore);

// let avgScore = (mathScore + engScore) / 2;
// console.log(avgScore);

//NaN <- Not a Number


//! ! ! ! ! 실습2 ! ! ! ! !

let mathScore = "77";
let engScore = "88";

mathScore = Number(mathScore);
engScore = Number(engScore);

let avg = (mathScore + engScore) / 2;
console.log(avg);


//! ! ! ! ! 백틱문자 ! ! ! ! !

let nameArr = ["바나나","체리","수박","토마토"];
console.log(nameArr.length);

for(let i = 0; i < nameArr.length; i++) {
    console.log(`${i+1} 번째 과일은 ${nameArr[i]} 입니다.`);
}

//! ! ! ! ! 기본 연산자 ! ! ! ! !
// let sq = 2 ** 2;
// console.log(sq);

// let num = Math.sqrt(sq);
// console.log(num);

// let num2 = Math.sqrt(81);
// console.log(num2); //루트


//! ! ! ! ! 연산자 줄여서 쓰기
// let numb = 10;

// numb = numb + 5;
// console.log(numb);

// numb += 5;
// console.log(numb);

// numb -= 5;
// console.log(numb);




//! ! ! ! ! 실습3  ! ! ! ! 
// let num = 10;

// num += 1; //=num++;
// console.log(num);
// num--; //=num--;
// console.log(num);
// num /= 2; //num -= 5;
// console.log(num);
// num /= 5; //num = num / 5;
// console.log(num);
// num *= 3; //num = num * 3;
// console.log(num);




//! ! ! ! ! 일치 연산자
let a = 1;
let b = "1";

console.log(a == b);
console.log(a === b);




//! ! ! ! ! 논리 연산자 ! ! ! ! !
// let name = "핑크빈";
// let age = 16;
// let isAdult = age > 19;

// if(isAdult) {
//     console.log("통과");
// } else {
//     console.log("돌아가");
// }


// let gender = "M";
// let name = "Tom";
// let isAdult = true;

// if(gender === "F" && name ==="Jane" || isAdult === true) {
//     console.log("통과");
// } else {
//     console.log("돌아가");
// }

// if(gender === "F" && (name ==="Jane" || isAdult === true)) {
//     console.log("통과");
// } else {
//     console.log("돌아가");
// }



//! ! ! ! ! 실습4 ! ! ! ! !
// let isAdult = false;
// let isVip = true;
// let isDrunken = false;
// let isMoney = false;

// if(((isAdult || isVip ) && !isDrunken) || isMoney) {
//     console.log("통과");
// } else {
//     console.log("돌아가");
// }

// let isAdult2 = true;
// let isVip2 = true;
// let isDrunken2 = false;
// let isMoney2 = false;

// if(((isAdult2 || isVip2 ) && !isDrunken2) || isMoney2) {
//     console.log("통과");
// } else {
//     console.log("돌아가");
// }




//! ! ! ! ! 반복문 for ! ! ! ! !
// for(let i = 0; i < 100; i++) {
//     console.log(i);
// }

// for(let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
        
//     }
// }


//! ! ! ! ! 실습5 ! ! ! ! !
// for(let i = 1; i < 10001; i++) {
//     if(i % 13 == 0 && i % 2 == 1); 
//     console.log(i); 
// }

// for(let i = 0; i < 10001; i += 13) {
//     if(i % 2 == 1); 
//     console.log(i); 
// }


// let num = Number(prompt("숫자를 입력하세요.")) 
// for(let i = 1; i < num; i++) {
//     if(i % 13 == 0 && i % 2 == 1); 
//     console.log(i); 
// }

// let userInput = prompt("어디까지 구할까요?");
// userInput = Number(userInput);

// for(let i = 0; i < 500; i += 13) {
//     if(i % 2 == 1);
//     console.log(userInput);
// }





//! ! ! ! ! 반복문 while ! ! ! ! !
// let i = 2, j = 1;

// while(i < 10) {
//     while(j < 10) {
//         console.log(i, "x", j, "=", i*j);
//         console.log(`${i} x ${j} = ${i*j}`);
//         j++;
//     }
//     i++;
//     j = 1;
// }

//do while
// let k = 10;

// do {
//     console.log(`do-while의 반목문이 ${k} 번째 실행 중입니다.`);
// } while ( k < 10);

// //while
// let m = 10;

// while ( m < 10) {
//     console.log(`while의 반복문이 ${m} 번째 실행 중입니다.`);
//     m++;
// }


//continue
// for(let i = 0; i < 100; i++) {
//     if(i == 10) {
//         console.log("stop");
//         continue;
//     }
//     console.log(i);
// }





//! ! ! ! ! 실습6 ! ! ! ! ! 
let sum = 0;

for(let n = 0; n < 101; n++) {
    if(n % 2 == 1) {
        continue;
    }
    sum += n;
    
}

console.log(sum);






//! ! ! ! ! 함수 ! ! ! ! !

// function sayHello() {
//     console.log("hello");
// }


// function sayHello(name) {
//     console.log(`hello,${name}!`);
// }

// sayHello("핑크빈");

// function square(number) {
//     return number ** 2;
// }

// function square(number, 제곱근) {
//     return number ** 제곱근;
// }

// console.log(square(2,3));

// function sayHello(name = "friend!") {
//     console.log(`hello, ${name}`);
// }

// sayHello();







//! ! ! ! ! 실습7 ! ! ! ! !
//  function triangle(a,b) {
//      return a * b / 2;
//  }
//  function 삼각형의넓이(밑변, 높이) {
//      return 밑변 * 높이 / 2;
//  }

//  console.log(삼각형의넓이(4,5));

 
 
 
//  function circle(r) {
//      return 3.14 * r ** 2;
//  }
// console.log(circle(3));

 


// function pita(c,d) {
//      var e;
//      e = Math.sqrt(c ** 2 + d ** 2);
//      return e;
// }
// console.log(pita(4,5));



//! ! ! ! ! 함수 선언 방법들 ! ! ! ! ! 

// sayHello();
// heyHello();

// function sayHello() {
//     console.log("say hello");
// } //함수 선언문 <- 얘를 많이쓴다. 어느곳에서나 선언가능

// let heyHello = function () {
//     console.log("hey hello");
// } //함수 표현식 <- 미리 선언이 되어있지 않으면 선언할때 문제가 생김.




//함수 선언문
//  function sayHello() {
//      console.log("say hello");
// }

// //함수 표현식
// let sayHello = function () {
//     console.log("say hello");
// }

// //화살표 함수
// let sayHello = () => {
//     console.log("say hello");
// }




//! ! ! ! ! 실습8 ! ! ! ! ! 
function 삼각형의넓이1(밑변, 높이) {
    return 밑변 * 높이 / 2;
}

console.log(삼각형의넓이1(4,5));






// function circle(r) {
//     return 3.14 * r ** 2;
// }
// let circle = (r) {
//     return 3.14 * r ** 2;
// }
// console.log(circle(3));






// function pita(c,d) {
//     var e;
//     e = Math.sqrt(c ** 2 + d ** 2);
//     return e;
// }
let pita = (a,b) => {
    var e;
    e = Math.sqrt(a ** 2 + b ** 2);
    return e;
}
console.log(pita(4,5));






//! ! ! ! !  배열 ! ! ! ! ! 
// let kdt = ["진형","영은","지훈","소민"];
// console.log(kdt[0]);





//! ! ! ! ! 실습9 ! ! ! ! ! 
let kdt = ["진형","영은","지훈","소민","혜영","세영","한솔","해성","승환",
            "종익","다영","의진","지현","민정","승수","유림","원이","수지","준우"]
// console.log(kdt[5]);
// console.log(kdt.length);
// console.log(kdt);
// kdt.push("효석"); //배열 끝에 추가됨
// kdt.push("핑크빈");
// console.log(kdt);
// kdt.pop(); //pop에 데이터를 입력해서 빼는건 ㄴㄴ 무조건 배열 끝에있는 애를 제거함
// console.log(kdt);
// kdt.unshift("주벗") //배열 맨앞에 추가됨
// console.log(kdt);
// kdt.shift();//맨앞에 추가된거 제거
// console.log(kdt);

console.log(kdt);
kdt.push("윤비");
console.log(kdt);
kdt.pop();
console.log(kdt);

for(let i = 0; i <kdt.length; i++) {
    console.log(`kdt ${i+1} 번째 참여자의 성함은 ${kdt[i]} 입니다.`)
}







//! ! ! ! ! 메소드 체이닝 ! ! ! ! !
// let hello = "h-e-l-l-o";
// let helloArr = hello.split("-");
// console.log(helloArr);


// let hello2 = "hello";
// let helloArr2 = hello2.split("");å
// console.log(helloArr2);

// //.split : 문자를 인수 기준으로 쪼개서 배열로 반환
// //.reverse : 배열의 순서를 뒤집어서 반환
// //.join : 배열을 인수 기준으로 병합해서 문자열을 반환

// let reverseArr = helloArr.reverse();
// console.log(reverseArr);

// let joinStr = reverseArr.join("");
// console.log(joinStr)

let hello2 = "hello";
let result = hello2.split("").reverse().join("");
//메소드가 return 값이 있어야 사용가능, return 값이 없으면 체이닝이 발생하지 않음.
console.log(result);








//! ! ! ! ! object ! ! ! ! !
// const superMan = {
//     name: "clark",
//     age: 33,
//     height: 187,
//     weight : 77,
// }

// console.log(superMan.name);
// console.log(superMan["age"]);

// superMan.hairColor = "black"
// superMan["job"] = "superhero"

// console.log(superMan);
// delete superMan.weight;
// console.log(superMan);







//! ! ! ! ! 실습10 ! ! ! ! ! 
const pororo = {
    name2: "뽀로로",
    age2: 7,
    fly () {
        console.log("귀엽다.");
    }
}

pororo.cute();

console.log(pororo.name2);
console.log(pororo["age2"]);

pororo.gender = "pengguin"
console.log(pororo);

pororo.heitght2 = 210
console.log(pororo);

delete pororo.gender;
console.log(pororo);

console.log("name" in pororo);
console.log("height" in pororo);


for(key in pororo) {
    // console.log(key);
    console.log(pororo[key]);
}


//! ! ! ! ! object-property ! ! ! ! !
const superMan = {
    name: "clark",
    age: 33,
    height: 187,
    weight : 77,
}

// console.log("name" in superMan);
// console.log("job" in superMan);






//! ! ! ! ! object-for~in ! ! ! ! !
const superMan2 = {
    name: "clark",
    age: 33,
    height: 187,
    weight : 77,
}

for(key in superMan2) {
    console.log(key);
    console.log(superMan2[key]);
}





//! ! ! ! ! object-method ! ! ! ! !
const superMan3 = {
    name: "clark",
    age: 33,
    height: 187,
    weight : 77,
    fly: function () {
        console.log("날아갑니다.");
    },
    run() {
        console.log("날아.");
    }
}

superMan3.fly();
superMan3.run();