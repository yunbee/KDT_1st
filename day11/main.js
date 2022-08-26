let str = "우영";

let longStr = str.repeat(5); + "우";
console.log(longStr);


let str2 = "      우영      ";

let trimStr = str2.trim();
console.log(str2);
console.log(trimStr);











const pi = 3.14159265358979;

let int = parseInt(pi);
let float = parseFloat(pi);

console.log(int);
console.log(float);
console.log(typeof int, typeof float);












let minus = -999;

console.log("abs", Math.abs(minus));
console.log("min", Math.min(1,2,4,5,-10,33));
console.log("max", Math.max(1,2,4,5,-10,33));
console.log("ceil", Math.ceil(3.14));
console.log("floor", Math.floor(3.99));
console.log("round", Math.round(3.511111));
console.log("random", Math.random());












let nums = [-1.23, 13, 14.52, -33.53, 30];

let max = Math.max(...nums);
let min = Math.min(...nums);

max = Math.floor(max);
min = Math.floor(min);

max = Math.abs(max);
min = Math.abs(min);

let avg = (max+min)/2;
console.log(avg);



Math.floor(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));












const numbers1 = [1,2,3,4];
const numbers2 = [1,2,3,4];

numbers1.splice(0,2);
numbers2.splice(2,1,77);

console.log(numbers1);
console.log(numbers2);














let numbers = [1, 2, 3, 4];
let fruits = ["사과", "딸기", "수박"];

console.log(numbers.concat(fruits)); 
console.log(numbers); 
console.log(fruits);















let numbers3 = [1, 2, 3, 4, 5, 6];
let fruits3 = ["사과", "바나나", "수박", "포도", "파인애플"];

let numbersLength = numbers3.length; 
let fruitsLength = fruits3.length;



for(let i = 0; i<numbers3.length; i++){
    console.log(numbers3[i]);
}

for(let i = 0; i<fruits3.length; i++){
    console.log(fruits3[i]);
}
// for (let number of numbers3) {
//   console.log(number);
// }
// for (let fruit of fruits3) {
//   console.log(fruit);
// } //->위에랑 같은 식, but 특정 인데스값에 분기처리를 못함;; 잘안씀



//for each로 적용하기 
// [].forEach(function(item,index,array){}); ->기본구문

numbers3.forEach(function (number, index, array) { 
    console.log(number, index, array);
});
// numbers3.forEach((number, index, array) => {
//   console.log(number, index, array);
// }); -> 화살표함수


fruits3.forEach(function (fruit, i, arr) {
  console.log(fruit, i, arr);
});
// fruits3.forEach((fruit, i, arr) => {
//   console.log(fruit, i, arr);
// }); -> 화살표함수












let numbers4 = [1, 2, 3, 4, 5, 6]; 
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

//for 문
for (let i = 0; i < numbers4.length; i++) { 
    sum1 += numbers4[i];
    //sum1 = sum1 + i;
}

//for of 문 -> 자주 안써욤^^ㅋ
for (let num of numbers4) { 
    sum2 += num;
}

//for each 문
numbers4.forEach(function(num){
    sum3 += num;
})

//for each 화살표 함수
// numbers4.forEach((num) => {
//   sum3 += num;
// });

console.log(sum1, sum2, sum3);












//실습
let numbers5 = [];

for (let i = 1; i < 101; i++) {
    numbers5.push(i);
}
console.log(numbers5);












let numbers6 = [1, 2, 3, 4, 5, 6];

let foreach = numbers6.forEach(function (number) {
    return number;
});

let map = numbers6.map(function (number) {
    return number;
});

let map2 = numbers6.map(number => {
return number; });

console.log("foreach :", foreach);
console.log("map :", map);
console.log("map2 :", map2);











const fruits4 = ["사과", "파인애플", "수박", "포도", "오렌지"];

let obj = fruits4.map((item, index) => {
    return {
        id: index,
        name: item, }
})
console.log(obj);











let numbers7 = [1, 2, 3, 4, 5, 6];
let reduce = numbers7.reduce(function (sum, item, index, arr) { 
    // console.log(sum, item, index, arr);
    return sum + item;
})

//reduce는 매개변수를 4개 받음. sum(or total),item,index,arr












//실습
let numbers8 = [];

for(let i=1; i<=100; i++) {
    numbers8.push(i);
}

let reduce2 = numbers8.reduce(function (sum,item) {
    return sum + item;
})









let str3 = "apple";
console.log([...str3]);

[...str3].forEach(function(item,index,arr){
    console.log(item,index,arr);
})











//배열 filter
let numbers9 = [1,2,3,4,5,6];

let arr = numbers9.filter(function(item){
    return item > 3;
})

console.log(arr);

let arr2 = numbers9.filter(function(item){
    return item < 3;
})
let arr3 = numbers9.filter((item) => item >3); //->화살표 함수

console.log(arr2);



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.includes("spray"));
console.log(words.includes("pororo"));

let arr4 = words.filter(function(item){
    return item.length >= 6;
})

let arr5 = words.filter(item => item.length >= 6); //화살표 함수

console.log(arr4);
console.log(arr5);













//실습
let fruits5 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]; 
let fruits6 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = [];
let same2 = [];
let diff = [];
let diff2 = [];

same = fruits5.filter((item) => fruits6.includes(item));
diff = fruits5.filter((item) => !fruits6.includes(item));

//for each 문
fruits5.forEach(function(item){
    if(fruits6.includes(item)) {
        same2.push(item);
    }
})

fruits5.forEach(function(item){
    if(!fruits6.includes(item)) {
        diff2.push(item);
    }
})


console.log(same, same2);
console.log(diff, diff2);










//실습
// const fruits7 = ["Apple", "Banana", "Cherry!"];

// const result = fruits7.find(item => {
//     return  .test(item);
// })
function solution(arr) {
    var answer = 0;
    
    let sum = arr.reduce(function(a,b){
        return a+=b;
    })
    answer = sum/arr.length;
    
    return answer;
}











//object
let obj1 = {a:1, b:2};
let obj2 = {b:3, c:4};

let assignedObj = Object.assign(obj1, obj2);

console.log(assignedObj);
console.log(obj1);
console.log(obj2);













//객체의 불변성
const userName = { 
    id: 1,
    name: "tetz",
  };
  const userEmail = { 
    id: 1,
    email: "xenosign@naver.com",
  };
  const assignedObj2 = Object.assign(userName, userEmail);
  const assignedObj3 = Object.assign({}, userName, userEmail);

  console.log(assignedObj2);
  console.log(assignedObj3);  
  console.log(userName); 
  console.log(assignedObj2 === userName);
  console.log(assignedObj3 === userName);

//   const a = { po: "뽀로로" }; 
//   const b = { po: "뽀로로" }; 
//   console.log(a === b);















//object ke
const user = { 
    id: 1,
    name: "tetz",
    email: "xenosign@naver.com",
  };

  const keys = Object.keys(user); 
  console.log(keys);
  // ["id", "name", "email"]

  const values = keys.map((key) => user[key]); 
  console.log(values);













//구조 분해 할당
  const user2 = {
    id2: 1,
    name2: "tetz",
    email2: "xenosign@naver.com",
  };
  const { id2, name2, email2, address2 } = user2;
  // 기본값 설정 const { id, name, email, address = "KOREA"} = user;
  // 특정 변수에 넣기 const { id, name: tetz, email, address = "KOREA"} = user;
  console.log(id2);
  console.log(name2);
  console.log(email2);
  console.log(address2);

  const fruits8 = ["사과", "딸기", "망고", "수박"]; 
  const [a, b, c, d] = fruits8;
  console.log(a, b, c, d);













//전개 연산자
const fruits9 = ["사과", "바나나", "수박"]; 
console.log(fruits9); 
console.log(...fruits9);
// console.log("사과", "바나나", "수박");
function conLog(a, b, c) {
  console.log(a, b, c);
}

conLog(fruits9[0], fruits9[1], fruits9[2]); 
conLog(...fruits9);