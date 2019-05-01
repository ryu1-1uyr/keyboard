var colorList = ["red", "green", "blue", "black", "yellow"];
var user = function (name) {
    return 'こんにちは、' + name + 'さん';
};
console.log(user('太郎'));
var dom_h1 = document.getElementById("hello");
var dom_click = document.getElementById("click");
console.log(dom_h1);
dom_h1.innerText = "令和になったなぁ";
// dom_h1.style.color = "red"
var click = function () {
    console.log("clicked!!!!");
    var dom_h1 = document.getElementById("hello");
    var randnum = Math.floor(Math.random() * Math.floor(5));
    dom_h1.style.color = colorList[randnum];
};
dom_click.addEventListener('click', click, false);
