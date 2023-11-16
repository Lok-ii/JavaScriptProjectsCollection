let choose=document.querySelectorAll(".one img");
// console.log( choose);
let firstpage=document.querySelector(".firstpage")
let secondpage=document.querySelector(".secondpage")
let thirdpage=document.querySelector(".thirdpage")
let thirdmain=document.querySelector(".thirdmain")
let secondmain=document.querySelector(".secondmain");
let colorheader=document.querySelector("#colorheader");
let colorheader31=document.querySelector("#colorheader31");
let colorheader32=document.querySelector("#colorheader32");
let colortext=document.querySelector("#colortext")
let colortext31=document.querySelector("#colortext31")
let colortext32=document.querySelector("#colortext32")
let templateoption=document.querySelector("#templateType")
let project6cont=document.querySelector(".project6cont")

choose.forEach((item)=>{
    item.addEventListener("click",function(){
      if(item.getAttribute("class")=="oneone"){
        firstpage.style.display="none";
        secondpage.style.display="block"
        // thirdpage.style.display="none"

      }
      else if (item.getAttribute("class")=="onetwo") {
        firstpage.style.display="none"
        secondpage.style.display="block";
        // thirdpage.style.display="block"
        templateoption.value="advance"
        thirdmain.classList.toggle("hidden");
        secondmain.classList.toggle("hidden");
        colorheader.classList.toggle("hidden");
        colorheader31.classList.toggle("hidden");
        colorheader32.classList.toggle("hidden");
        colortext.classList.toggle("hidden");
        colortext31.classList.toggle("hidden");
        colortext32.classList.toggle("hidden");
      
      }

})
})

//..................... secondpage..............//
let back=document.querySelector(".back")
back.addEventListener('click',()=>{
    alert("you cannot go back")
})



// console.log(templateoption);

templateoption.addEventListener("input",(e)=>{
    thirdmain.classList.toggle("hidden");
    secondmain.classList.toggle("hidden");
    colorheader.classList.toggle("hidden");
    colorheader31.classList.toggle("hidden");
    colorheader32.classList.toggle("hidden");
    colortext.classList.toggle("hidden");
    colortext31.classList.toggle("hidden");
    colortext32.classList.toggle("hidden");
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
let hy3=document.querySelector(".hy3");
let job3=document.querySelector(".job3");
let mailgmailcont=document.querySelector(".mailgmailcont")
let numphone=document.querySelector(".numphone")
let loactioncontadd=document.querySelector(".loactioncontadd")
let prfilecont2=document.querySelector(".prfilecont2")



let thirdleft=document.querySelector(".thirdleft");

let thirdlefth1=document.querySelector(".thirdleft h1");

let thirdright=document.querySelector(".thirdright");
let thirdrighth3=document.querySelector(".thirdright h3");

let profile2=document.querySelector(".profile2");
let profile2p=document.querySelector(".profile2 p");
let contact2=document.querySelector(".contact2");
let contact2p=document.querySelector(".contact2 p");
let exprence4=document.querySelector(".exprence4")
let exprence4p=document.querySelector(".exprence4 p")
let skillsname=document.querySelector(".skillsname")
let skillsnamep=document.querySelector(".skillsname p")

let project6=document.querySelector(".project6")
let project6p=document.querySelector(".project6 p")
let education6=document.querySelector(".education6")
let education6p=document.querySelector(".education6 p")
let newappend=document.querySelector("#newappend");
skilladd.addEventListener("input",()=>{
    if(skilladd.value[skilladd.value.length-1]===","){
    let p=document.createElement("p");
    p.innerHTML=`${skilladd.value.substring(0,skilladd.value.length-1)}`;
    p.className="skill1"
    skillsadd.appendChild(p)
    skilladd.value="";
    }
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
            hy3.innerHTML=items.value;
        }else if(items.id==="jobtitle"){
            job3.innerHTML=items.value
            jobtitle.innerHTML=items.value
        }else if(items.id==="email"){
            mailgmailcont.innerHTML=items.value;
            contactemailadd.innerHTML=items.value
        }else if(items.id==="number"){
            numphone.innerHTML=items.value;
            contactnumb.innerHTML=items.value;
        }else if(items.className==="address"){
            loactioncontadd.innerHTML=items.value;
            addresssss.innerHTML=items.value
        }else if(items.id=="colorheader31"){
            thirdleft.style.backgroundColor=items.value
            contact2.style.backgroundColor=items.value
            skillsname.style.backgroundColor=items.value
            education6.style.backgroundColor=items.value
          
            
        }else if(items.id==="colorheader32"){
            thirdright.style.backgroundColor=items.value
            profile2.style.backgroundColor=items.value
            exprence4.style.backgroundColor=items.value
            project6.style.backgroundColor=items.value

        }else if(items.id==="colortext31"){
           hy3.style.color=items.value
            contact2p.style.color=items.value
            skillsnamep.style.color=items.value
            education6p.style.color=items.value

        }else if(items.id==="colortext32"){
            thirdright.style.color=items.value
            profile2p.style.color=items.value
            exprence4p.style.color=items.value
            project6p.style.color=items.value

        }

    })
})

textareas.forEach((items)=>{
    items.addEventListener("input",()=>{
        if(items.className==="Professional"){
            summarycont.innerHTML=items.value
            prfilecont2.innerHTML=items.value

        }
})
})


let employment33=document.querySelector("#employment33")
let employdetails3=document.querySelector(".employdetails3")
let project3=document.querySelector("#project3")
let projectdetails3=document.querySelector(".projectdetails3")
let education3=document.querySelector("#education3")
let educationaldetails3=document.querySelector(".educationaldetails3")
buttons.forEach((items)=>{
   items.addEventListener("click",()=>{
    if(items.id==="employment"){
       createemploy()
    }else if(items.id==="project"){
        createprojec()   
    }else if(items.id=="education"){
        createeducation()
    }else if(items.id=="employment33"){
        createemploy3()
    }else if(items.id=="project3"){
        createprojec3() 
    }else if(items.id=="education3"){
        createeducation3()
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


function createemploy3(){
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
employdetails3.appendChild( employdetail);
// console.log("hyyyyyyyyyyyy");
}

let projectcont=document.querySelector(".projectcont");
function createprojec(){
    let projectdetali=document.createElement("div");
    

    projectdetali.className="projectdetaill";
    projectdetali.innerHTML=`
    <div><p>Start</p>
    <input type="month" name="" id="monthpro"></div>
   
    <div> <p>End</p>
    <input type="month" name="" id="monthendpro"></div>
    <input type="text" id="projecttitle" placeholder="Project Title">
    <textarea name="" id="" cols="50" rows="5"  class="Descriptionpro" placeholder="Description"></textarea>`

    let projectcont1=document.createElement("div");
    projectcont1.className="projectcont11"
    projectcont1.innerHTML=`<div class="flex"> <li class="titlepro">1</li><div  class="flex2"><p class="start">1</p> - 
    <p class="end">1</p></div></div>
    <p class="descriptionpro">1</p>
    
    `
    let newprojectcont=document.createElement("div");
    newprojectcont.className="projectcont11"

    newprojectcont.innerHTML=`<div  class="flex"><li class="titlepro">1</li><div  class="flex2"><p class="start">1</p> - 
    <p class="end">1</p></div></div>
    <p class="descriptionpro">1</p>
    `


    project6cont.appendChild(newprojectcont);
    projectcont.appendChild(projectcont1);
   
    

    
    projectdetails.insertBefore(projectdetali,newappend);
    
}

newappend.addEventListener("click",()=>{
    let projectdetaill=document.querySelectorAll(".projectdetaill");
    let projectcont11=document.querySelectorAll(".projectcont11");
 let k=0;
    for(let j=0;j<4;j++){
        for(let i=0;i<projectdetaill.length;i++){
            
               projectcont11[k].firstElementChild.lastElementChild.firstElementChild.innerText=projectdetaill[i].firstElementChild.lastElementChild.value;
    
                projectcont11[k].firstElementChild.lastElementChild.lastElementChild.innerText=projectdetaill[i].firstElementChild.nextElementSibling.lastElementChild.value;
    
                projectcont11[k].firstElementChild.firstElementChild.innerText=projectdetaill[i].lastElementChild.previousElementSibling.value;
    
                projectcont11[k].lastElementChild.innerText=projectdetaill[i].lastElementChild.value;

                k++;
                // console.log( projectcont11[i].firstElementChild.firstElementChild.nextElementSibling.innerText);
        }
    }
})

let Descriptionpro=document.querySelector(".Descriptionpro");

// console.log(Descriptionpro);
// function createprojec3(){
//     let projectdetali=document.createElement("div");
//     projectdetali.className="projectdetail3";
//     projectdetali.innerHTML=`
//     <p>Start</p>
//     <input type="month" name="" id="monthpro">
//     <p>End</p>
//     <input type="month" name="" id="monthendpro">
//     <input type="text" id="projecttitle" placeholder="Project Title">
//     <textarea name="" id="" cols="50" rows="5"  class="Descriptionpro" placeholder="Description"></textarea>`
//     projectdetails3.appendChild(projectdetali);
// }

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

function createeducation3(){
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

            educationaldetails3.appendChild(educationdetailssss)
}





// .........................third page .............
let back3=document.querySelector(".back3")
// back3.addEventListener("click",()=>{
//     alert("you can't go back")
// })
let select3=document.querySelector("#templateType3");
// console.log(select3);



