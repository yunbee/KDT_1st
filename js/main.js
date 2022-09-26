// @ts-check
/* eslint-disable */

// const { runMain } = require('module');

//생성자 함수선언
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = function () {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
//   };
// }

//class 함수선언
// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
//   }

//   showSpec() {
//     console.log(
//       `이 차의 브랜드는 ${this.brand}이고, 색상은 ${this.color} 입니다.`
//     );
//   }
// }

// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//super 는 부모의 클래스에 접근하고 싶을때 사용함.

// showFuel() {
//   console.log(`해당 자동차는 ${this.fuel}의 힘으로 주행합니다.`);
// }

//   drive() {
//     console.log(
//       `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행중입니다.`
//     );
//   }

//   showSpec() {
//     super.showSpec();
//     console.log(`그리고 이 차는 ${this.fuel}의 힘으로 주행합니다.`);
//   }
// }

// const hyundai = new Car('hyundai', 'rosybrown');
// const porche = new Car('porche', 'red');
// const volvo = new Car('volvo', 'black');
// const tesla = new ElecCar('tesla', 'white', 'eletricity');

// console.log(tesla.brand, tesla.color, tesla.fuel);
// // tesla.showFuel();
// tesla.drive();
// console.log(hyundai.brand, hyundai.color);
// porche.drive();
// volvo.drive();

// const hyundai = new Car('hyundai', 'white');
// hyundai.drive();
// const tesla = new ElecCar('tesla', 'red', 'electricity');
// tesla.drive();

// const hyundai = new Car('hyundai', 'white');
// // hyundai.showSpec();
// const tesla = new ElecCar('tesla', 'red', 'electricity');
// // tesla.showSpec();

// //this 와 super 의 차이점 알아두기!

// console.log(hyundai instanceof Car);
// console.log(tesla instanceof Car);

//생성자 함수로구현
function Car(brand, color) {
  this.brand = brand;
  this.color = color;

  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  };
}

function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color);
  this.fuel = fuel;
  this.drive = function () {
    console.log(
      `${brand}의 ${color}색 자동차가 ${this.fuel}의 힘으로 주행 중입니다`
    );
  };
}

ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar('tesla', 'white', 'elec');
tesla.drive();

//promise 기능
// const promise = new Promise((resolve, reject) => {
//   console.log('promise의 기능을 바로 수행합니다');
//   setTimeout(() => {
//     const userId = 'irene';
//     if (userId === 'irene') {
//       resolve(userId);
//     } else {
//       reject(new Error(`서버 기능이 정상적으로 작동하지 않았습니다`));
//     }
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(`요청하신 아이디는 ${value} 입니다`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log(`promise 시퀀스 종료`);
//   });

// let id = prompt('아이디를 입력하세요');
// let userId = '';
// console.log('로그인 시도');

// setTimeout(function cb1() {
//   userId = 'irene';
//   console.log('아이디 정보 획득 완');
//   if (id === userId) {
//     console.log('로그인 성공');
//   } else {
//     console.log('로그인 실패');
//   }
// }, 2000);

// console.log('1');
// setTimeout(() => {
//   console.log('callback');
// }, 3000);
// console.log('2');

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('hello');
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`the server is listening at port: ${PORT}`);
// });
