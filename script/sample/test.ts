const colorList:string[] = ["red","green","blue","black","yellow"]

let user = (name) => {
    return 'こんにちは、' + name + 'さん';
}

console.log(user('太郎'));

let dom_h1:HTMLElement = document.getElementById("hello")
let dom_click:HTMLElement = document.getElementById("click")

console.log(dom_h1)

dom_h1.innerText = "令和になったなぁ"
// dom_h1.style.color = "red"

const click = () => {
    console.log("clicked!!!!");
    
    let dom_h1:HTMLElement = document.getElementById("hello")
    let randnum:number = Math.floor(Math.random() * Math.floor(5))

    dom_h1.style.color = colorList[randnum]

}

dom_click.addEventListener('click',click,false)

