let choose=document.querySelectorAll(".one img");
// console.log( choose);
let firstpage=document.querySelector(".firstpage")
let secondpage=document.querySelector(".secondpage")
let thirdpage=document.querySelector(".thirdpage")

choose.forEach((item)=>{
    item.addEventListener("click",function(){
      if(item.getAttribute("class")=="oneone"){
        firstpage.style.display="none";
        secondpage.style.display="block"
        thirdpage.style.display="none"
      }
      else if (item.getAttribute("class")=="onetwo") {
        firstpage.style.display="none"
        secondpage.style.display="none";
        thirdpage.style.display="block"
      
      }

})
})

//..................... secondpage..............//

let templateoption=document.querySelector("#templateType")
console.log(templateoption);

templateoption.addEventListener("input",(e)=>{
    if(templateoption.value==="basic"){
        console.log("jegjgguk ");
    }
    else if(templateoption.value==="advance"){
        console.log(("advance"));
    }
})

let resheader=document.querySelector(".resheader")
let resheaderText=document.querySelector(".hyy")
let inputtags=document.querySelectorAll("input")
let textareas=document.querySelectorAll("textarea")
let h1=document.querySelector("#nameheader");
let jobtitle=document.querySelector("#nameniche");
let contactemailadd=document.querySelector(".contactemailadd")
let contactnumb=document.querySelector(".contactnumb");
let addresssss=document.querySelector(".addresssss")
let summarycont=document.querySelector(".summarycont")
let skillsadd=document.querySelector(".skillsadd")
let skilladd=document.querySelector("#skills")
let buttons=document.querySelectorAll("button")
let employdetails=document.querySelector(".employdetails")
let projectdetails=document.querySelector(".projectdetails")
let educationaldetails=document.querySelector(".educationaldetails")


skilladd.addEventListener("change",()=>{
    let p=document.createElement("p");
    p.innerHTML=`${skilladd.value}`;
    p.className="skill1"
    skillsadd.appendChild(p)
})

inputtags.forEach((items)=>{
    items.addEventListener("input",()=>{
        if(items.id==="colorheader"){
            resheader.style.backgroundColor=items.value
        }else if(items.id==="colortext"){
            h1.style.color=colortext.value;
            jobtitle.style.color=colortext.value
        }else if(items.id==="name"){
            h1.innerHTML=items.value;
        }else if(items.id==="jobtitle"){
            jobtitle.innerHTML=items.value
        }else if(items.id==="email"){
            contactemailadd.innerHTML=items.value
        }else if(items.id==="number"){
            contactnumb.innerHTML=items.value;
        }else if(items.className==="address"){
            addresssss.innerHTML=items.value
        }

    })
})

textareas.forEach((items)=>{
    items.addEventListener("input",()=>{
        if(items.className==="Professional"){
            summarycont.innerHTML=items.value

        }
})
})

buttons.forEach((items)=>{
   items.addEventListener("click",()=>{
    if(items.id==="employment"){
       createemploy()
    }else if(items.id==="project"){
        createprojec()   
    }else if(items.id=="education"){
        createeducation()
    }
   })
})

function createemploy(){
    let  employdetail=document.createElement("div")
    employdetail.className=" employdetail";
    employdetail.innerHTML=`
       
    <p>Start</p>
    <input type="month" name="" id="month">
    <p>End</p>
    <input type="month" name="" id="monthend">
    <input type="text" id="jobpre" placeholder="Job Title">
    <input type="text" name="" id="employer" placeholder="Employer">
    <textarea name="" id="" cols="50" rows="5"  class="Description" placeholder="Description"></textarea>
`
employdetails.appendChild( employdetail);
// console.log("hyyyyyyyyyyyy");
}

function createprojec(){
    let projectdetali=document.createElement("div");
    projectdetali.className="projectdetail";
    projectdetali.innerHTML=`
    <p>Start</p>
    <input type="month" name="" id="monthpro">
    <p>End</p>
    <input type="month" name="" id="monthendpro">
    <input type="text" id="projecttitle" placeholder="Project Title">
    <textarea name="" id="" cols="50" rows="5"  class="Descriptionpro" placeholder="Description"></textarea>`
    projectdetails.appendChild(projectdetali);
}

function createeducation(){
    let educationdetailssss=document.createElement("div");
    educationdetailssss.className="educationdetailssss"
    educationdetailssss.innerHTML=`
    <p>Start</p>
            <input type="month" name="" id="monthedu">
            <p>End</p>
            <input type="month" name="" id="monthendedu">
            <input type="text" id="qualification" placeholder="Qualification">
            <input type="text" name="" id="school" placeholder="School/College">
            <textarea name="" id="" cols="50" rows="5"  class="Descriptionedu" placeholder="Description"></textarea>`

            educationaldetails.appendChild(educationdetailssss)
}