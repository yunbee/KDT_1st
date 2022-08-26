//js로 remove
// let spanEl = document.querySelector("span");
// spanEl.remove();

//jquery로 remove
// $("span").remove();


// function showValue() {
//     $("input").val("가나다라마바사");
//     // document.querySelector("input").value="가나다라마바사";
// }



// $("span").text("가나다라"); //아래 js와 같은 코드

// // document.querySelector("span").textContent = "가나다라"





//! ! ! ! ! 실습1 ! ! ! ! !

// ! ! ! !  js로 구현
// const inputText = document.querySelector(".text-input");
// const writeBtn = document.querySelector(".write-btn");
// const modifyBtn = document.querySelector(".modify-btn");
// const spanEl = document.querySelector("span");

// modifyBtn.addEventListener("click", function() {
//     inputText.value = "가나다라마바사";
// });
// function changeSpan() {
//     spanEl.textContent = inputText.value;
// };



//! ! ! !  jquery로 구현
//jquery 에서 on 은 js 의 addeventlistener 와 똑같이 작동한다.
// $(".write-btn").on("click", function(){
//     $("span").text($(".text-input").val());
//     $("span").text(text);
// })

// $(".modify-btn").on("click", function() {
//     $(".text-input").val("가나다라마바사");
// })





//jquery 속성 변경하기 -> js에서는 setAttribute 속성이용, jq 에서는 attr 
// $(".text-input").on("click", function(){
//     $(".text-input").attr("type", "button");
//     $(".text-input").attr("value", "button");
// })





//! ! ! ! ! 실습2 ! ! ! ! !
// ! ! ! !  js로 구현
// const inputText = document.querySelector(".text-input");
// const modifybtn1 = document.querySelector(".modify-btn-1");
// const modifybtn2 = document.querySelector(".modify-btn-2");

// modifybtn1.addEventListener("click", function() {
//     document.querySelector(".text-input").setAttribute("placeholder", "변경1을 누르셨습니다.");
// })

// modifybtn2.addEventListener("click", function() {
//     document.querySelector(".text-input").setAttribute("type", "radio");
// })



//! ! ! !  jquery로 구현
// $(".modify-btn-1").on("click", function() {
//     $(".text-input").attr("placeholder","변경1을 누르셨습니다.");
// })

// $(".modify-btn-2").on("click", function() {
//     $(".text-input").attr("type","radio");
// })






//js&jq 로 css 구현하기

// $("div").css("background-color", "plum");
// document.querySelector("div").style = "background-color: violet";






//! ! ! ! ! 실습3 ! ! ! ! !
// function changeCss() {
//     document.querySelector("div").style = "background-color:plum;"
// }

// function changeCss2 () {
//     $("div").css("background-color", "purple");
// }






//html  변경하기
// $("p").html("<h1>루피</h1>");

// document.querySelector("p").innerHTML = "<h1>loopy</h1>";





//요소추가
// const li = document.createElement("li");
// li.textContent = "추가용";

// $(".me").before(li);
// $(".me").after(li);






//! ! ! ! ! 실습4 ! ! ! ! !
const textInput = document.querySelector(".text-input");
const modifyBtn1 = document.querySelector(".modify-btn-1");
const modifyBtn2 = document.querySelector(".modify-btn-2");
const list = document.querySelector("ul");

modifyBtn1.addEventListener("click", function(){
    const addLi = document.createElement("li");
    addLi.textContent = textInput.value;

    list.append(addLi);
    textInput.value = "";

})


function prependLi() {
    let text = $(".text-input").val();
    $("ul").prepend(`<li>${text}</li>`);
}






