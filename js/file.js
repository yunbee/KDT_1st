// @ts-check

// const promise = new Promise(function (resolve, reject) {
//   const irene = 'young';
//   if (irene === 'young') {
//     setTimeout(() => {
//       resolve('irene is young');
//     }, 3000);
//   } else {
//     reject('irene is getting young');
//   }
// });
// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

const fs = require('fs').promises;

//async, awaite

async function main() {
  let data = await fs.readFile('./readme.txt');
  console.log('1번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('2번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('3번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('4번', data.toString());
}
main();

//promise
// fs.readFile('./readme.txt')
//   .then((data) => {
//     console.log('1번', data.toString());
//     return fs.readFile('./readme.txt');
//   })
//   .then((data) => {
//     console.log('2번', data.toString());
//     return fs.readFile('./readme.txt');
//   })
//   .then((data) => {
//     console.log('3번', data.toString());
//     return fs.readFile('./readme.txt');
//   })
//   .then((data) => {
//     console.log('4번', data.toString());
//   })
//   .catch((err) => {
//     throw err;
//   });

// const fs = require('fs');

// let data = fs.readFileSync('./readme.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('3번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('4번', data.toString());

// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번 일꾼', data.toString());

//   fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번 일꾼', data.toString());

//     fs.readFile('./readme.txt', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번 일꾼', data.toString());

//       fs.readFile('./readme.txt', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번 일꾼', data.toString());
//       });
//     });
//   });
// });

// const str = '파일 쓰기가 정상적으로 수행이 되면 이 문구가 파일에 들어갑니다.';

// fs.writeFile('readmy.txt', str, 'utf-8', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('writeFile succeed');
//   }
// });

// fs.readFile('readme.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//화살표 함수
// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
