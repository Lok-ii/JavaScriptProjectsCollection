let signInBtn=document.querySelector(".signInBtn")
let loginSection=document.querySelector(".loginSection")
let container=document.querySelector(".container")
let registration=document.querySelector(".registration")
let login=document.querySelector(".login")

// Adding Data dynamically
window.addEventListener("scroll",()=>{
    
})

// SignIn Feature
signInBtn.addEventListener("click",()=>{
    container.style.display="none"
    loginSection.style.display="flex"
})
let cancel=document.querySelector(".cancel")
cancel.addEventListener("click",()=>{
    container.style.display="flex"
    loginSection.style.display="none"
})

let registerBtn=document.querySelector(".registerBtn")
let loginBtn=document.querySelector(".loginBtn")

registerBtn.addEventListener("click",()=>{
    loginBtn.classList.remove('active')
    registerBtn.classList.add('active')
    registration.style.display="flex"
    login.style.display="none"
    formContainer.style.height="280px"

})
let formContainer=document.querySelector(".formContainer")
loginBtn.addEventListener("click",()=>{
    registration.style.display="none"
    login.style.display="flex"
    formContainer.style.height="230px"
    loginBtn.classList.add('active')
    registerBtn.classList.remove('active')
})

// Form Validation
let regForm=document.querySelector("#regForm")
let formRegister=document.querySelector(".formRegister")

formRegister.addEventListener("click",(e)=>{
    e.preventDefault()
    validateForm();
})
function validateForm(){
    let name=document.forms["SIGNUP"]["name"]
    let email=document.forms["SIGNUP"]["email"]
    let password=document.forms["SIGNUP"]["password"]

    if(name.value==""){
        window.alert("Please enter your name")
        return false;
    }
    
    if(password.value==""){
        window.alert("Please enter your password")
        return false;
    }

    if(email.value==""){
        window.alert("Please enter your email")
        return false; 
    }
    else{
        const registrationStatus=register();
        if(registrationStatus==='registered'){
            window.alert("This email is already registered");
            return false;
        }
        else if(registrationStatus==='success'){
            window.alert("Successfully Registered");
            return true;
        }
    }
}

// User Registration and adding user info in localstorage
let arr=JSON.parse(localStorage.getItem("users")) || []
function register(){
    let name=document.forms["SIGNUP"]["name"].value
    let email=document.forms["SIGNUP"]["email"].value
    let password=document.forms["SIGNUP"]["password"].value

    var NewUser={
        id:Number(new Date),
        "Name":name,
        "Email":email,
        "Password":password
    }
    let UserExists=arr.find(users=> users.Email===NewUser.Email)
    if(UserExists){
        return 'registered'
    }
    else{
        arr.push(NewUser)
        let userString=JSON.stringify(arr)
        localStorage.setItem('users',userString)
        return "success" 
    }
}

// User Login
let loginForm=document.querySelector(".loginForm")
let formLogin=document.querySelector(".formLogin")

formLogin.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("Hiii");
    validateSignIn();
})

function validateSignIn(){
    let email=document.forms["signInForms"]["email"]
    let password=document.forms["signInForms"]["password"]

    if(password.value=="" || email.value==""){
        window.alert("Please enter your details");
        return false;
    }    
    else{
        const LoginStatus=signIn()
        if(LoginStatus==='notRegistered'){
            window.alert("Wrong Details entered")
            return false
        }
        else if(LoginStatus==='success'){
            window.alert("Successfully Registered")
            return true
        }
    }
}

function signIn(){
    let email=document.forms["signInForms"]["email"].value;
    let password=document.forms["signInForms"]["password"].value;
    let UserLogin={
        "Email":email,
        "Password":password
    }
    let users=[];
    users=JSON.parse(localStorage.getItem("users")) || []

    console.log(users);
    for(let i in users){
        if(UserLogin.Email==users[i].Email && UserLogin.Password==users[i].Password){
           userDisplay(users[i].Name)
           displayDownloadFunction()
           localStorage.setItem('user',JSON.stringify({'Name':users[i].Name,'Email':users[i].Email}))

           container.style.display="flex"
           loginSection.style.display="none"
        //    location.reload()
           return 'success'
        }
    }

}
function userDisplay(userName){
    let signIn_indexDiv=document.querySelector(".signIn") 
           signIn_indexDiv.innerHTML=`
            <span class="signInBtn" onclick="logOut_dropdown()">
                <i class="fa-solid fa-user" style="color: #ffffff;"></i>
                ${userName}
                <i class="fa-solid fa-caret-down icon"></i> 
            </span>
           `
}
// LogOut function
let logOut=document.querySelector(".logOut")
function logOut_dropdown(){
    logOut.style.display="flex"
}
let download=document.querySelectorAll(".download")
let downloadMessage=document.querySelectorAll(".downloadMessage")
logOut.addEventListener("click",()=>{
    localStorage.removeItem('user')
    let signIn_indexDiv=document.querySelector(".signIn") 
    signIn_indexDiv.innerHTML=`
        <span class="signInBtn">Sign In</span>
    `
    logOut.style.display="none"
    let signInBtnHome=document.querySelector(".signInBtn")
    
    signInBtnHome.addEventListener("click",()=>{
        container.style.display="none"
        loginSection.style.display="flex"
    })
    hideDonwloadFunction()
    downloadMessage.forEach((event)=>{
        event.style.display="flex"
    })
})

window.onload=()=>{
    if(localStorage.hasOwnProperty('user')){
        userDisplay(JSON.parse(localStorage.getItem('user')).Name)
        displayDownloadFunction()

    }
    else{
        hideDonwloadFunction()
    }
}
let demoBtn=document.querySelectorAll(".demoBtn")

function hideDonwloadFunction(){
    download.forEach((event)=>{
        event.style.display="none"
    })
    demoBtn.forEach((event)=>{
        event.style.margin="0 0 0 0"
    })
}

function displayDownloadFunction(){
    download.forEach((event)=>{
        event.style.display="flex"
    })
    downloadMessage.forEach((event)=>{
        event.style.display="none"
    })
    demoBtn.forEach((event)=>{
        event.style.margin="1rem 0 0 0"
    })
}