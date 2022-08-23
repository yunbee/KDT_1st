// let boxEl = document.querySelector(".box");
// let boxEl = document.getElementById("second-box");
// console.log(boxEl);




//querySelector(요소 선택자) -> 문서상에서 제일 첫번째 있는 요소를 반환.



//getElementByld("id") -> id값을 반환



//! ! ! ! ! clssList ! ! ! ! ! 
//class 추가 삭제 등

// let boxEl = document.querySelector(".box");
// boxEl.classList.add("active");
// console.log(boxEl);

// console.log(boxEl.classList.contains("active"));

// boxEl.classList.remove("active");
// console.log(boxEl.classList.contains("active"));





//! ! ! ! ! AddEventListner ! ! ! ! !
// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//     alert("Add event listner");
// })


//html-style
// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//     if (boxEl.classList.contains("orange")) {
//         boxEl.classList.remove("orange");
//         boxEl.classList.add("skyblue");
//     } else if(boxEl.classList.contains("skyblue")) {
//         boxEl.classList.remove("skyblue");
//         boxEl.classList.add("orange");
//     } else {
//         boxEl.classList.add("orange");
//     }
// });






//! ! ! ! ! setAttibute ! ! ! ! ! 
// let boxEl = document.querySelector(".box");
// let inputEl = document.getElementById("input");
// // let inputEl = document.querySelector("#input");

// boxEl.addEventListener("click", function(){
//     inputEl.setAttribute("placeholder", "아이디를 입력하세요");
// });
// // boxEl.addEventListener("click", function(){
// //     inputEl.setAttribute("type", "button");
// // });
// boxEl.addEventListener("click", function(){
//     inputEl.setAttribute("type", "password");
// });






//! ! ! ! ! textContent ! ! ! ! !
// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function(){
//     boxEl.textContent="KDT";
// });







//! ! ! ! ! 실습3 ! ! ! ! ! 
// <me> let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//     if (boxEl.classList.contains("orange")) {
//         boxEl.classList.remove("orange");
//         boxEl.classList.add("skyblue");
//     } else if(boxEl.classList.contains("skyblue")) {
//         boxEl.classList.remove("skyblue");
//         boxEl.classList.add("orange");
//     } else {
//         boxEl.classList.add("orange");
//     }
// });

//teacher
// let boxEl = document.querySelector(".box");
// console.log(boxEl);

// boxEl.addEventListener("click", function () {
//     if (boxEl.classList.contains("orange")) {
//         boxEl.classList.remove("orange");
//         boxEl.classList.add("skyblue");
//     } else if (boxEl.classList.contains("skyblue")) {
//         boxEl.classList.remove("skyblue");
//         boxEl.classList.add("orange");
//     } else {
//         boxEl.classList.contains("orange");
//     }
// });


// let buttonOne = document.getElementById("button-1");
// let buttonTwo = document.getElementById("button-2");
// let inputEl = document.getElementById("input");
// let spanEl = document.querySelector("span");

// buttonOne.addEventListener("click", function() {
//     inputEl.setAttribute("placeholder", "아이디를 입력하세요");
//     spanEl.textContent = "아이디를 입력하세요";
// })

// buttonTwo.addEventListener("click", function(){
//     let inputText;
//     inputText = inputEl.value;
//     spanEl.textContent = inputText;
// })





//! ! ! ! ! querySelector All ! ! ! ! ! 
// let boxEls = document.querySelectorAll(".box");
// console.log(boxEls);

// boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`box_${index+1}`);
// })
// console.log(boxEls);






//! ! ! ! ! 실습4 ! ! ! ! !
let boxEls = document.querySelectorAll(".box");
boxEls.forEach(function(boxEl, index) {
    boxEl.classList.add(`box_${index+1}`);
})

boxEls.forEach(function(boxEl, index) {
    if(index%7 === 0) {
        boxEl.classList.add(`box_1}`);
    } else if (index%7 === 1) {
        boxEl.classList.add(`box_2}`);
    } else if (index%7 === 2) {
        boxEl.classList.add(`box_3}`);
    } else if (index%7 === 3) {
        boxEl.classList.add(`box_4}`);
    } else if (index%7 === 4) {
        boxEl.classList.add(`box_5}`);
    } else if (index%7 === 5) {
        boxEl.classList.add(`box_6}`);
    } else if (index%7 === 6) {
        boxEl.classList.add(`box_7}`);
    }
})

// boxEls.forEach(function(boxEl, index) {
//     if(index%7 === 0) {
//         boxEl.style.backgroundColor = "red";
//     } else if (index%7 === 1) {
//         boxEl.style.backgroundColor = "orange";
//     } else if (index%7 === 2) {
//         boxEl.style.backgroundColor = "yellow";
//     } else if (index%7 === 3) {
//         boxEl.style.backgroundColor = "green";
//     } else if (index%7 === 4) {
//         boxEl.style.backgroundColor = "blue";
//     } else if (index%7 === 5) {
//         boxEl.style.backgroundColor = "navy";
//     } else if (index%7 === 6) {
//         boxEl.style.backgroundColor = "violet";
//     }
// }) -> html에서 style 없이 js 만으로 색을 넣고 싶을때 사용.