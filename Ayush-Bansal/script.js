let choose=document.querySelectorAll(".one img");
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
let newappendemploy=document.querySelector("#newappendemploy");
let newappendeducat=document.querySelector("#newappendeducat")
let newappend=document.querySelector("#newappend");

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
        thirdmain.classList.toggle("hiddenayush");
        secondmain.classList.toggle("hiddenayush");
        colorheader.classList.toggle("hiddenayush");
        colorheader31.classList.toggle("hiddenayush");
        colorheader32.classList.toggle("hiddenayush");
        colortext.classList.toggle("hiddenayush");
        colortext31.classList.toggle("hiddenayush");
        colortext32.classList.toggle("hiddenayush");
      
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
    thirdmain.classList.toggle("hiddenayush");
    secondmain.classList.toggle("hiddenayush");
    colorheader.classList.toggle("hiddenayush");
    colorheader31.classList.toggle("hiddenayush");
    colorheader32.classList.toggle("hiddenayush");
    colortext.classList.toggle("hiddenayush");
    colortext31.classList.toggle("hiddenayush");
    colortext32.classList.toggle("hiddenayush");
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
        newappendemploy.style.display="block"
       createemploy()
    }else if(items.id==="project"){
        newappend.style.display="block"
        createprojec()   
    }else if(items.id=="education"){
        newappendeducat.style.display="block"
        createeducation()
    }
   })
})

let experiencecont=document.querySelector(".experiencecont")
let exprence4cont=document.querySelector(".exprence4cont")


function createemploy(){
    let  employdetaili=document.createElement("div")
    employdetaili.className="employdetaill";
    employdetaili.innerHTML=`
       
    <div><p>Start</p>
    <input type="month" name="" id="month"></div>
   <div> <p>End</p>
   <input type="month" name="" id="monthend"></div>
    <input type="text" name="" id="employer" placeholder="Employer">
    <textarea name="" id="" cols="50" rows="5"  class="Description" placeholder="Description"></textarea>
`
let employcont1=document.createElement("div");
employcont1.className="employcont11"
employcont1.innerHTML=`<div class="flex"> <li class="employtitle">1</li><div  class="flex2"><p class="startemp">1</p> - 
<p class="endemp">1</p></div></div>
<p class="descriptionempl">1</p>

`
let newemploycont1=document.createElement("div");
newemploycont1.className="employcont11"

newemploycont1.innerHTML=`<div class="flex"> <li class="employtitle">1</li><div  class="flex2"><p class="startemp">1</p> - 
<p class="endemp">1</p></div></div>
<p class="descriptionempl">1</p>
`


exprence4cont.appendChild(newemploycont1);
experiencecont.appendChild(employcont1);


employdetails.insertBefore(employdetaili,newappendemploy);
}


newappendemploy.addEventListener("click",()=>{
let employdetaill=document.querySelectorAll(".employdetaill");
let employcont11=document.querySelectorAll(".employcont11");
let k=0;
    for(let j=0;j<4;j++){
        for(let i=0;i<employdetaill.length;i++){
            
            employcont11[k].firstElementChild.lastElementChild.firstElementChild.innerText=employdetaill[i].firstElementChild.lastElementChild.value;
    
            employcont11[k].firstElementChild.lastElementChild.lastElementChild.innerText=employdetaill[i].firstElementChild.nextElementSibling.lastElementChild.value;
    
            employcont11[k].firstElementChild.firstElementChild.innerText=employdetaill[i].lastElementChild.previousElementSibling.value;
    
            employcont11[k].lastElementChild.innerText=employdetaill[i].lastElementChild.value;

                k++;
        }
    }

})

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
        }
    }
})
let educationcont=document.querySelector(".educationcont")
let education6cont=document.querySelector(".education6cont");


function createeducation(){
    let educationdetaili=document.createElement("div");
    educationdetaili.className="educationdetaili"
    educationdetaili.innerHTML=`
   <div> <p>Start</p>
   <input type="month" name="" id="monthedu"></div>
           <div> <p>End</p>
           <input type="month" name="" id="monthendedu"></div>
            <input type="text" name="" id="school" placeholder="School/College">
            <textarea name="" id="" cols="50" rows="5"  class="Descriptionedu" placeholder="Description"></textarea>`

let educationcont11=document.querySelector("div");
educationcont11.classList="educationcont112"
educationcont11.innerHTML=`<div class="flex"> <li class="eduationtitle">1</li><div  class="flex2"><p class="startedu">1</p> - 
<p class="endedu">1</p></div></div>
<p class="descriptionedu1">1</p>
`
let neweducationcount1=document.createElement("div");
neweducationcount1.className="neweducationcount1";
neweducationcount1.innerHTML=`
<div class="flex"> <li class="eduationtitle">1</li><div  class="flex2"><p class="startedu">1</p> - 
<p class="endedu">1</p></div></div>
<p class="descriptionedu1">1</p>
<br>
`
education6cont.appendChild(neweducationcount1)
educationcont.appendChild(educationcont11);
      
educationaldetails.insertBefore(educationdetaili,newappendeducat);
}

newappendeducat.addEventListener("click",()=>{
    let educationdetaili=document.querySelectorAll(".educationdetaili")
    let educationcont112=document.querySelectorAll(".educationcont112");

    let k=0;
    for(let j=0;j<4;j++){
        for(let i=0;i<educationdetaili.length;i++){
            
            educationcont112[k].firstElementChild.lastElementChild.firstElementChild.innerText=educationdetaili[i].firstElementChild.lastElementChild.value;
    
            educationcont112[k].firstElementChild.lastElementChild.lastElementChild.innerText=educationdetaili[i].firstElementChild.nextElementSibling.lastElementChild.value;
    
            educationcont112[k].firstElementChild.firstElementChild.innerText=educationdetaili[i].lastElementChild.previousElementSibling.value;
    
            educationcont112[k].lastElementChild.innerText=educationdetaili[i].lastElementChild.value;

                k++;
        }
    }
})














// .........................third page .............
let back3=document.querySelector(".back3")
// back3.addEventListener("click",()=>{
//     alert("you can't go back")
// })
let select3=document.querySelector("#templateType3");
// console.log(select3);



