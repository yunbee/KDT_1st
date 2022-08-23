// const pororo = {
//     name: "뽀로로",
//     height: 70,
//     weight: 50,
//     gender: "None",
//     // say() {
//     //     console.log("뽀로로가 말을 합니다.")
//     // }
//     say: function() {
//         console.log("뽀로로가 말을 합니다.")
//     }
// }

// pororo.say();

// // for(key in pororo) {
// //     console.log(key, pororo[key]);
// // }




// function sayHello() {
//     console.log(`hello, i'm ${this.name2}`);
//     console.log(this);
// }
// //this 는 예약어, 내가 지금 속한 객체를 반환할때 사용
// let boy = {
//     name2: "justin",
//     sayHello
// }

// let girl = {
//     name2: "anna",
//     sayHello
// }

// boy.sayHello();
// girl.sayHello();






// //! ! ! ! ! 실습1 ! ! ! ! ! 

// // function showHeight() {
// //     console.log(pororo.height);
// // } -> this를 사용하지않아서 오직 뽀로로 키값만 나오게됨.

// function showHeight () {
//     console.log(this.height);
// }

// function showName () {
//     console.log(this.name);
// }

// // const pororo = {
// //     name:"뽀로로",
// //     height:70,
// //     showName: function () {
// //         console.log(pororo.name);
// //     },
// //     showHeight,
// // }

// const pororo = {
//     name:"뽀로로",
//     height:70,
//     // showName: function () {
//     //     console.log(pororo.name);
//     // },
//     showName,
//     showHeight,
// }


// const loopy = {
//     name: "루피",
//     height:60,
//     showName: function() {
//         console.log(loopy.name);
//     },
//     showHeight,
// }

// const loopy = {
//     name: "루피",
//     height:60,
//     // showName: function() {
//     //     console.log(loopy.name);
//     // },
//     showName,
//     showHeight,
// }

// pororo.showName();
// pororo.showHeight();
// loopy.showName();
// loopy.showHeight();







//! ! ! ! ! 화살표 함수와 this ! ! ! ! ! 
// => 이와같은 화살표 함수를 쓸경우,일반함수와 달리 this를 가지지못한다.
//    화살표 함수 내부에서 this를 쓸경우, 외부에서 값을 가져옴.

// let showWeight = () => {
//     console.log(this.weight);
//     console.log(this);
// }

// const pororo2 = {
//     name3:"뽀로로",
//     weight:70,
//     showWeight,
// }







//! ! ! ! ! 생성자 함수 ! ! ! ! ! 

function Fruits(name, price) {
    this.name = name;
    this.price = price;
    this.showPrice = function () {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    };
}

let apple = new Fruits("apple", 1000);
let peach = new Fruits("peach", 2000);
let watermelon = new Fruits("watermelon", 3000);
let strawberry = new Fruits("strawberry", 4000);

apple.showPrice();
peach.showPrice();
watermelon.showPrice();
strawberry.showPrice();







//! ! ! ! ! 실습2 ! ! ! ! ! 

function Kdt(name2, gender) {
    this.name2 = name2;
    this.gender = gender;
    this.showInfo = function () {
        console.log(`참여자의 이름은 ${this.name2}이고, 성별은 ${this.gender}입니다.`)
    }
}

let PHY = new Kdt("박혜영", "여성");
let KYB = new Kdt("김윤비", "여성");
let JSY = new Kdt("장세영", "여성");
let KHS = new Kdt("강한솔", "남성");


PHY.showInfo();
KYB.showInfo();
JSY.showInfo();
KHS.showInfo();