// @ts-check
/* eslint-disable */

const arr = [10, 20, 30, 40, 50];

const result = arr.find(function (element) {
  return element === 20;
});
console.log(result);

// for (let i = 0; i < arr.length; i++) {
//   console.log('일반 for 사용', arr[i]);
// }

// for (let item of arr) {
//   console.log('for of 문 사용', item);
// }

// // 배열의 map 함수
// arr.map(function (element, index) {
//   console.log(index + '번 값', element);
// });

// arr.map((element, index) => {
//   console.log(index + '번 값', element);
// });

// /**
//  * jsdoc을 쓸때는 함수 바로 위에 적어줘야 한다.
//  * eslint 와 마찬가지로 권고사항
//  *
//  * @param {string} name -> data 타입도 설정가능
//  * @param {number} age
//  * @returns 얘는 이름과 나이를 받아서 문자열로 출력합니다.
//  * @todo 내일 새로운 매개변수 추가 해야함 due to 10:30
//  * @deprecated 더이샹 해당 기능을 쓰지않을때 사용
//  *
//  */
// function hello(name, age) {
//   return `내 이름은 ${name} 이고 나이는 ${age} 입니다`;
// }
// /** @type {string} */
// const test = 'irene';

// console.log(hello('irene', 31));

// /**
//  * @typedef Post
//  * @property {number} id
//  * @property {string} title
//  * @property {string} content
//  */

// /**
//  * @type {Post}
//  */

// const post = {
//   id: 1,
//   title: '제목',
//   content: '내용',
// }
