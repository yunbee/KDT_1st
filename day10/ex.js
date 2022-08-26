const dateEl = document.getElementById("date");
const contentEl = document.getElementById("content");
const buttonEl = document.querySelector("table");
const btn = document.querySelector("button");

let target = null;

buttonEl.addEventListener("click", function (e) {
    // dateEl.value = e.target.innerText;
    if (e.target.tagName === "P") {
        // console.log(e.target.tagName);
        dateEl.value = e.target.textContent;
        target=e.target.parentNode;
    }
})


function writeSchedule () {
    const divEl = document.createElement("div");
    divEl.textContent = contentEl.value;
    target.append(divEl);
}



// $("p").on("click",function(e){
//     let date = e.currentTarget.textContent;
//     $("#date").val(`${date}`);
// })
// $("button").on("click",function(e){
//     var text =$("content").val();
//     $(e.currentTarget).append($("<div>").text(text));
// })