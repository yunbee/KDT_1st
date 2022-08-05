// let a = 10;
// let b = 5;

// console.log(a==b);

// console.log(a!==b);

// console.log(a>b);

// console.log(a<b);

// let a = true;
// let b = false;
// let c = true

// console.log(a&&b);


// if ! ! ! ! !

// let yunb = "김윤비";

// if(yunb == "김윤비") {
//     alert("true");
// } else {
//     alert("false");
// }

// if(yunb == "김윤배") {
//     alert("true");
// } else {
//     alert("false");
// }

//if문일때 else가 필수는 아니다.



//if elseif else! ! ! ! ! 

// let yunb = "김윤";

// if(yunb == "김윤비") {
//     alert("김윤비");
// } else if(yunb == "김윤배") {
//     alert("김윤배");
// } else {
//     alert("모르겠어요");
// }


// let yunb = "김윤비";
// let gender = "female";

// if(gender == "female") {
//     if(yunb == "김윤비") {
//         alert("잘찾으셨습니다.");
//     } else {
//         alert("이름이 틀렸네요.");
//     }
// } else {
//     alert("성별이 틀렸습니다.");
// }

// let yunb = "김윤배";
// let gender = "female";

// if(gender == "female") {
//     if(yunb == "김윤비") {
//         alert("잘찾으셨습니다.");
//     } else {
//         alert("이름이 틀렸네요.");
//     }
// } else {
//     alert("성별이 틀렸습니다.");
// }

// let yunb = "김윤비";
// let gender = "male";

// if(gender == "female") {
//     if(yunb == "김윤비") {
//         alert("잘찾으셨습니다.");
//     } else {
//         alert("이름이 틀렸네요.");
//     }
// } else {
//     alert("성별이 틀렸습니다.");
// }

let yunb = "김윤비";

if(yunb == "김윤비") {
    console.log("맞았습니다.");
} else {
    console.log("틀렸습니다.");
}

// 3항 연산자, 위의 if 문과 같음, 간단히 한줄로 표현
yunb == "김윤비" ? console.log("맞았습니다.") : console.log("틀렸습니다.")


//실습 5

let day = new Date().getDay();
let dayName = "";

if(day == 0) {
    dayName = "일요일";
} else if (day == 1) {
    dayName = "월요일";
} else if (day == 2) {
    dayName = "화요일"
} 