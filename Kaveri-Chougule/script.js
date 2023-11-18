// let currentDate=document.querySelector(".current-date-text")
// Get the current date and display it in the specified format

let current_date=document.querySelector(".current-date")
let date = new Date();
let day=date.getDate();
let month=date.getMonth();
let year=date.getFullYear()
current_date.innerHTML=`
    ${day}/${month}/${year}
`

// Add item
// Function to add a new item row to the invoice table
function BtnAdd(){
    // console.log("Hello");
    let textInside=$("#table-row").clone().appendTo("#tbody")
    $(textInside).find("input").val('')

    $(textInside).removeClass("display-none");
    $(textInside).addClass("item-container")
}
// Delete item
// Function to delete an item row from the invoice table with a smooth animation
function BtnDelete(current){
    $(current).parent().parent().remove()
    current.parentElement.parentElement.style.width="0"
}

let tbody=document.getElementById("tbody")
let amount=document.getElementById("amount")
let quantity=1;
let price=1.00;
let amountDue=1;
let taxRate=document.getElementById("taxRate")

// Event listeners for updating tax and discount percentages
taxRate.addEventListener("input",()=>{
    // console.log(taxRate.value);
    let taxInpercent=document.getElementsByClassName("taxInPercent")
    taxInpercent[0].innerText="("+taxRate.value+"%)" 
})
let discountRate=document.getElementById("discountRate")

discountRate.addEventListener("input",()=>{
    let discountInpercent=document.getElementsByClassName("DiscountInPercent")
    discountInpercent[0].innerText="("+discountRate.value+"%)"
})
let finalValue=0
// Event listener for updating invoice details based on user input
tbody.addEventListener("input",(event)=>{
    let finalAmount=0;

    if(event.target.classList.contains("quantity")){
        quantity=event.target.value
    }
    if(event.target.classList.contains("price")){
        price=event.target.value
    }
    // let taxValue=(price*quantity)*((taxRate/100))
    // let totalPrice=(parseFloat(quantity)*parseFloat(price))*((1+parseFloat(taxRate.value)/100+parseFloat(discountRate.value)/100));

    finalAmount+=(quantity*price)
    // console.log(finalAmount);
    finalValue+=finalAmount
    console.log(finalValue);
    amount.innerText=finalAmount;
})

let lightBox_TableBody=document.querySelector(".lightBox_TableBody")
// Function to create and display a lightbox with invoice details
function lightBox_item_func(quantity, name, desc, price, amount) {
    let newTr = document.createElement("div");
    newTr.className="ligthBox_Tr";
    newTr.innerHTML = `
        <p class="hd1">${quantity}</p>
        <p class="hd2">${name}-${desc}</p>
        <p class="hd3">$${price}</p>
        <p class="hd4 hdAmount">${amount}</p>
    `;
    lightBox_TableBody.appendChild(newTr);
  }

// changing currency sign
// Event listener for changing currency sign
let currency=document.querySelector(".currency")

let currency_change=document.querySelectorAll(".currency_change")
currency.addEventListener("input",()=>{
    for(let i=0;i<currency_change.length;i++){
        currency_change[i].innerHTML=`${currency.value}`
    }
})

// console.log(lightBox);
// Event listener for reviewing the invoice and displaying a lightbox with details
let reviewBtn=document.getElementById("reviewBtn")
reviewBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    CalculationStuff()
    // lightBox[0].style.display="flex"
    setTimeout(()=>{
        lightBoxFunction()
    },1000)
})
// Function to display the lightbox with invoice details
function lightBoxFunction(){
    let BillTo=document.querySelectorAll(".billTo")

    let BillFrom=document.querySelectorAll(".billFrom")
    let lightBox=document.getElementsByClassName("lightbox")
    let itemName=document.querySelectorAll(".itemName")
    let itemDesc=document.querySelectorAll(".itemDesc")
    let warning=document.querySelector(".warning")
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
        // console.log(item.value);
        // lightBoxData(item.value)
    })          
    itemDesc.forEach(item=>{
        if(item.value===""){
            check=false
        }
        // lightBoxData(item.value)
    })
    if(check){
        let itemContainers = document.querySelectorAll(".item-container");
        itemContainers.forEach(element=>{
            let itemN =
                element.firstElementChild.firstElementChild
                .value;
            // console.log(itemN);
            let itemD = element.firstElementChild.lastElementChild.value;
            // console.log(itemD);
            let itemQ = element.lastElementChild.firstElementChild.value;
            // console.log(itemQ);

            let itemP = element.lastElementChild.firstElementChild.nextElementSibling.lastElementChild.value;
            // console.log(itemP);

            let itemA = itemQ * itemP;
            // console.log(itemA);
            lightBox_item_func(itemQ, itemN, itemD, itemP, itemA);
        });
        lightBox[0].style.display="flex"
        warning.style.display="none"
    }
    else{
        warning.style.display="flex"
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
// console.log(amountDue);
function popUpHeadFunc(Custname){
        subPopUp1.innerHTML=`
            <h2>${Custname}</h2>
            <p class="popupInvoiceColor">Invoice #: ${invoice}</p>
        `

        // subtPopUp2.innerHTML=`
        //     <h3>Amount Due: <h3>
        //     <h4 class="amountDue">
                
        //     </h4>
        // `
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

// Event listener for downloading the invoice as a PDF
let download=document.getElementById("Download")
let sendInvoice=document.getElementById("sendInvoice")
download.addEventListener("click",()=>{
    const invoice=this.document.getElementById("lightBoxInvoice")
    download.style.display="none";
    sendInvoice.style.display="none"
    let opt={
        margin:1,
        filename:'SaleInvoice.pdf',
        image:{type:'jpeg',quality:0.98},
        html2canvas:{scale:2},
        jsPDF:{unit:'in',format:'letter',orientation:'portrait'}
    };

    // console.log(invoice);
    html2pdf().from(invoice).set(opt).save()

})
// Function to handle the calculation of subtotal, taxes, and discounts
let CalculateBtn=document.querySelector("#calcBtn")
function CalculationStuff(){
    let subtotal=0;
    let itemContainers = document.querySelectorAll(".item-container");
    itemContainers.forEach((event)=>{
        let itemQ = event.lastElementChild.firstElementChild.value;
            // console.log(itemQ);
        let itemP = event.lastElementChild.firstElementChild.nextElementSibling.lastElementChild.value;
        subtotal+=itemQ*itemP;
    })
    amount.innerText=subtotal
    let taxvalue=taxRate.value/100
    let taxInRs=subtotal*taxvalue
    let tax_percent=document.getElementsByClassName("taxPercent")
    tax_percent[0].innerText=taxInRs
    
    let discountValue=discountRate.value/100
    let discInRs=subtotal*discountValue
    console.log(discInRs);
    let discountpercent=document.getElementsByClassName("discountpercent")
    discountpercent[0].innerText=discInRs

    let totalCalc=document.getElementsByClassName("totalValue")
    console.log(totalCalc);
    totalCalc[0].innerText=(subtotal+taxInRs)-discInRs
    // console.log(totalCalc);
    let lightBox_subtotal=document.querySelector(".lightBox_subtotal")
    lightBox_subtotal.innerText=subtotal
    
    let lightBox_total=document.querySelector(".lightBox_total")
    lightBox_total.innerText=(subtotal+taxInRs)-discInRs 
    let notesInput=document.querySelector(".notesInput")

    let inputNotes=document.querySelector(".inputNotes")
    console.log(notesInput.value);
    inputNotes.innerText=notesInput.value

    let amountDue=document.querySelector(".amountDue")
    amountDue.innerText=(subtotal+taxInRs)-discInRs+"$"
}
CalculateBtn.addEventListener("click",()=>{
    CalculationStuff()
})

// Dark and Light Mode
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let body = document.querySelector("body");

let symbol=document.querySelectorAll(".symbol")
let section1=document.querySelector(".section1")
let form_Label=document.querySelectorAll(".sideSection")

light.addEventListener("click", () => {
  dark.style.display = "block";
  light.style.display = "none";

  body.style.backgroundColor = "#f2f3f7"
  section1.style.backgroundColor="white"
  section1.style.color='black'
    btnColor.style.background='#0d6efd'
    calculateTotal.style.background='#0d6efd'
    addBtn.style.background='#0d6efd'
    symbol.forEach((event)=>{
        event.style.color='#2b3136'
        event.style.borderColor='#2b3136'
      })
      form_Label.forEach((event)=>{
        event.style.color='black'
      })
//   header.style.backgroundColor = "var(--background-color)";
});

let btnColor=document.querySelector(".review-btn")
let calculateTotal=document.querySelector(".calculateTotal")
let addBtn=document.querySelector(".addBtn")
dark.addEventListener("click", () => {
  dark.style.display = "none";
  light.style.display = "block";

  body.style.backgroundColor = "#121212"
  section1.style.backgroundColor="#363636"
  section1.style.color='white'
  btnColor.style.background='#bb86fc'
  calculateTotal.style.background='#bb86fc'
  addBtn.style.background='#bb86fc'
  symbol.forEach((event)=>{
    event.style.color='white'
    event.style.borderColor='white'
  })
  form_Label.forEach((event)=>{
    event.style.color='white'
  })
//   #2b3136
});

// Event listener for handling lightbox navigation and closing
let back=document.getElementById("back")
back.addEventListener("click",()=>{
    let lightbox=document.getElementsByClassName("lightbox")
    console.log(lightbox[0]);
    lightbox[0].style.display="none"
    
})
let cross=document.getElementById("cross")
cross.addEventListener("click",()=>{
    location.reload()
})

// Function to send the invoice via email using EmailJS
function sendMail(){
    let params = {
        name: document.getElementById("billTo1").value,
        email: document.getElementById("billTo2").value,
        senderEmail: document.getElementById("billFrom2").value,
        senderName: document.getElementById("billFrom1").value,
        dateOfIssue: document.querySelector("#issueDate").value,
        total: document.querySelector(".lightBox_total").innerText,
        notes: document.querySelector(".inputNotes").innerText
    }

    let templateId = "template_seyegfa";
    let serviceId = "service_thkwh4k";
    
    emailjs.send(serviceId, templateId, params);
}

// Event listener for sending the invoice via email
document.querySelector("#sendInvoice").addEventListener("click", (e)=>{
    e.preventDefault();
    sendMail();
})