// for <-while보단 많이 사용. 2번 중첩까지는 가능(but 피하는편)

for(let i = 0; i < 100; i++) {
    console.log(i+1,"번째 반복중");
}

//while

let index = 0;
while(index<10) {
    console.log("인사를",index+1,"번째 드립니다.");
    index++;
}

let index2 = 0; //true = 1,false = 0 , true 대신 숫자 1써도 ㅇㅋ
while(true) {
    console.log("절을",index2+1,"번째 드립니다.");
    index2++;
    if (index2==10) {
        break;
    }
}

//실습 6

for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(i, "x" , j, "=", i*j);
    }
}

//실습7

// let sum = 0;
// for(let n=0; n<101; n++) {
//     if(n%2 == 0) {
//         sum = n + sum;
//     } else if(n%5 == 0) {
//         sum = n + sum;
//     }
// }

// console.log(sum); <-혜영님풀이



// let sum = 0;
// for(let i = 0; i<= 100; i++) {
//     if(i % 2 == 0) {
//         sum = sum + i;
//     }
//     else if(i % 5 == 0) {
//         sum = sum + i;
//     }
// }

// console.log(sum); <-강사님풀이


// let sum = 0;
// for(let i = 0; i<= 100; i++) {
//     if(i % 2 == 0 || i % 5 == 0) {
//         sum = sum + i;
//     }
// }

// console.log(sum); <-강사님풀이
