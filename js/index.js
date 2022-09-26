let contador = 1;
let imagesBanner = ["./images/Rectangle1.svg",
"./images/Rectangle2.svg",
"./images/Rectangle3.svg",
"./images/Rectangle4.svg",
"./images/Rectangle5.svg",
"./images/Rectangle6.svg"
]

setInterval(()=>{
    let banner = document.querySelector(".banner img");
    banner.src = imagesBanner[contador];
    contador++;
    if(contador > 5){
        contador = 0
    }


},5000)


const menu = document.querySelector(".hamburguer-menu");
const sidebar = document.getElementById("sidebar-menu");
const textMessage = document.querySelector(".contact-us textarea")
const textChars = document.getElementById("chars-left")

menu.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar-visible");
});


textMessage.addEventListener("input", (event)=>{
    const charsLeft = 100 - event.target.value.length;
    textChars.innerText = `At least ${charsLeft} characters left`
    if(event.target.value.length > 100){
        textChars.innerText = ""
    }
})