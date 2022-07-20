console.log("hekko");

let featuresMenu = document.querySelector(".menu-feature")
let arrow  = document.querySelector(".arr")
let dropmenu = document.querySelector(".features")
let companiesMenu = document.querySelector(".companies-menu")
let arrow2  = document.querySelector(".arr2")
let mobileMenu = document.querySelector(".mobile-menu")

function hello() {
    dropmenu.style.height = "20vh"
    arrow.style.transform = "rotate(180deg)"
}

function bye(){
    dropmenu.style.height = "0vh"
    arrow.style.transform = "rotate(0deg)"
}

function start() {
    companiesMenu.style.height = "15vh"
    arrow2.style.transform = "rotate(180deg)"

}

function end() {
    companiesMenu.style.height = "0vh"
    arrow2.style.transform = "rotate(0deg)"

}


function hamenu(){
  mobileMenu.style.transform = "translateX(40vw)"
}
document.querySelector(".close").addEventListener("click", ()=>{
    console.log("he");
    mobileMenu.style.transform = "translateX(100vw)"
})
function close(){
    mobileMenu.style.transform = "translateX(-40vw)"
    console.log("hekko");
}