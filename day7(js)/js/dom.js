let boxEl = document.querySelector(".box");

//querySelector는 요소의 클래스명과 아이디를 바로 반영해줌, 요소 1개 검색/찾기

console.log(boxEl);

// boxEl.addEventListener("click", function() {
//     alert("clicked");
// });

// boxEl.addEventListener("click", function() {
//     boxEl.classList.add("skyblue");
//     console.log(boxEl);
// }

boxEl.addEventListener("click", function() {
    if(boxEl.classList.contains("orange")) {
        boxEl.classList.remove("orange");
        boxEl.classList.add("skyblue");
    } else {
        boxEl.classList.add("orange");
    }
    boxEl.classList.add("skyblue");
    console.log(boxEl);
});