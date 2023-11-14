// let currentDate=document.querySelector(".current-date-text")


let current_date=document.querySelector(".current-date")
let date = new Date();
let day=date.getDate();
let month=date.getMonth();
let year=date.getFullYear()
current_date.innerHTML=`
    ${day}/${month}/${year}
`

// Add item

function BtnAdd(){
    // console.log("Hello");
    let textInside=$("#table-row").clone().appendTo("#tbody")
    $(textInside).find("input").val('')

    $(textInside).removeClass("d-none")
}
// Delete item
function BtnDelete(current){
    $(current).parent().parent().remove()
}

let tbody=document.getElementById("tbody")
let amount=document.getElementById("amount")
let quantity=1;
let price=1.00;
let amountDue=0;

let product_Name=""
let product_Desc=""
tbody.addEventListener("input",(event)=>{
    let finalAmount=0;

    if(event.target.classList.contains("quantity")){
        quantity=event.target.value
        // console.log(quantity);
    }
    if(event.target.classList.contains("price")){
        price=event.target.value
        // console.log(price);
    }
    // console.log(quantity);
    let taxRate=document.getElementById("taxRate")
    let discountRate=document.getElementById("discountRate")
    // let totalPrice=(parseFloat(quantity)*parseFloat(price))*((1+parseFloat(taxRate.value)/100+parseFloat(discountRate.value)/100));
    finalAmount+=quantity*price
    // console.log(finalAmount);
    if(event.target.classList.contains('itemName')){
        product_Name=event.target.value
    }
    if(event.target.classList.contains('itemDesc')){
        product_Desc=event.target.value
    }
    let amount=quantity*price;
    lightBox_item_func(quantity,product_Name,product_Desc,price,amount)
    
    // // console.log(finalAmount);
    amount.innerText=finalAmount;
    amountDue=finalAmount
})

let lightBox_TableBody=document.querySelector(".lightBox_TableBody")
// console.log(lightBox_TableBody);
function lightBox_item_func(quantity,name,desc,price,amount){
    lightBox_TableBody.innerHTML=`
    <tr>
        <td>${quantity}</td>
        <td>${name}-${desc}</td>
        <td>$${price}</td>
        <td>${amount}</td>
    </tr>
    `
}

// changing currency sign
let currency=document.querySelector(".currency")

let currency_change=document.querySelectorAll(".currency_change")
currency.addEventListener("input",()=>{
    for(let i=0;i<currency_change.length;i++){
        currency_change[i].innerHTML=`${currency.value}`
    }
})




// console.log(lightBox);
reviewBtn.addEventListener("click",(event)=>{
    event.preventDefault()

    // lightBox[0].style.display="flex"
    lightBoxFunction()
})
function lightBoxFunction(){
    let BillTo=document.querySelectorAll(".billTo")

    let BillFrom=document.querySelectorAll(".billFrom")
    let lightBox=document.getElementsByClassName("lightbox")
    let itemName=document.querySelectorAll(".itemName")
    let itemDesc=document.querySelectorAll(".itemDesc")
    let check=true

    BillTo.forEach(item=>{
        // console.log(item.value);
        if(item.value===""){
            check=false
        }
        billTo(item.value)
        // lightBoxData(item.value)
    })
    BillFrom.forEach(item=>{
        if(item.value===""){
            check=false
        }
        // console.log(item);
        billFrom(item.value)
    })
    itemName.forEach(item=>{
        if(item.value===""){
            check=false
        }
        console.log(item.value);
        // lightBoxData(item.value)
    })          
    itemDesc.forEach(item=>{
        if(item.value===""){
            check=false
        }
        // lightBoxData(item.value)
    })
    if(check){
        lightBox[0].style.display="flex"
    }
}

let billFrom1=document.querySelector("#billFrom1")
let popup_head=document.querySelector(".popup_head")

billFrom1.addEventListener("input",()=>{
    popUpHeadFunc(billFrom1.value)
})
let invoice_number=document.querySelector(".invoice_number");
let invoice=1;
invoice_number.addEventListener("input",()=>{
    invoice=invoice_number.value
})
let subPopUp1=document.querySelector(".subPopup1")

let subtPopUp2=document.querySelector(".subPopup2")
console.log(amountDue);
function popUpHeadFunc(Custname){
        subPopUp1.innerHTML=`
            <h3>${Custname}</h3>
            <p>Invoice #: ${invoice}</p>
        `

        subtPopUp2.innerHTML=`
            <h3>Amount Due: <h3>
            <h4 class="amountDue">
                
            </h4>
        `
}


let address=document.querySelector(".address")
let billFromLightBox=document.querySelector(".billFrom-LightBox")
function billFrom(item){
    // console.log(item);
    let head=document.createElement("div")
    head.classList.add("receiverInfo")
    head.innerHTML=`<p>${item}</p>`
    billFromLightBox.appendChild(head)
}
let billToLightBox=document.querySelector(".billTo-LightBox");

function billTo(item){
    let head=document.createElement("div")
    head.classList.add("senderName")
    head.innerHTML=`<p>${item}</p>`
    billToLightBox.appendChild(head)
}


let issueDate=document.getElementById("issueDate")
// console.log(issueDate.value);
let dateOfIssue=document.querySelector(".dateOfIssue_print")
// console.log(dateOfIssue);
function issueDateFunc(item){
    let head=document.createElement("div")
    head.classList.add("dateIssue")
    head.innerHTML=`<p>${item}</p>`
    dateOfIssue.appendChild(head)
}
issueDate.addEventListener("input",()=>{
    issueDateFunc(issueDate.value)
})

