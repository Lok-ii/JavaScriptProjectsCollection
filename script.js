let obj={
    project1:{
        name:"Team",
        image:"./team.jpg"
    },
    project2:{
        name:"Chrome Extension",
        image:"./chromeExtension.jpg"
    },
    project3:{
        name:"Resume Template",
        image:"./resumeTemplate.jpg"
    },
    project4:{
        name:"Invoice Generator",
        image:"./invoiceGenerator.jpg"
    },
    project5:{
        name:"Payment Integration",
        image:"./paymentIntegration.jpg"
    },
    project6:{
        name:"Trello Clone",
        image:"./trelloClone.jpg"
    },
    project7:{
        name:"Typing Speed Test Gamer",
        image:"./typingSpeedTest.jpg"
    },
    project8:{
        name:"Mine Game",
        image:"./mineGame.jpg"
    },
    project9:{
        name:"Code Editor",
        image:"./codeEditor.jpg"
    },
    project10:{
        name:"Flipkart Page sort and filter",
        image:"./flipkart.jpg"
    }
}

let signInBtn=document.querySelector(".signInBtn")
let loginSection=document.querySelector(".loginSection")
let container=document.querySelector(".container")

signInBtn.addEventListener("click",()=>{
    container.style.display="none"
    loginSection.style.display="flex"

})
let cancel=document.querySelector(".cancel")
cancel.addEventListener("click",()=>{
    container.style.display="flex"
    loginSection.style.display="flex"
})

let regForm=document.querySelector(".regForm")
let loginForm=document.querySelector(".loginForm")
let registration=document.querySelector(".registration")
let login=document.querySelector(".login")
registration.addEventListener("click",()=>{
    console.log("hii");
    // registration.style.display="flex"
    // login.style.display="none"
})
login.addEventListener("click",()=>{
    // registration.style.display="none"
    // login.style.display="flex"
    console.log("Hello");
})
