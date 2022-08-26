// 코테 1

// let result = solution(test);

// function solution(num) {
//     var answer = '';
//     if(num % 2 === 0) {
//         answer = "even";
//     } else if (num % 2 !== 0 ) {
//         answer = "odd";
//     }
//     return answer;
// }




// 코테 2
// let waterMelon = solution(10);

// console.log(waterMelon);

// function solution(n) {
//     var answer = '';

//     for (let i=1; i<n+1; i++) {
//         if(i%2===1) {
//             answer = answer + "수";
//         } else if (i%2==0) {
//             answer += "박";
//         }
//     }

//     return answer;
// }






 
// 코테 3 (약수의 합)
let n = 3000;
let result = solution(n);

function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++) {
        if(n%i === 0 ) {
            // answer = answer + i;
            answer += i;
        }
    }
    return answer;
}

console.log(result);
