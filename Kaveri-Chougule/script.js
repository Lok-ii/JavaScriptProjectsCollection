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
tbody.addEventListener("input",(event)=>{
    let quantity=1;
    let price=1.00;
    if(event.target.classList.contains("quantity")){
        quantity=event.target.value
        // console.log(quantity);
    }
    if(event.target.classList.contains("price")){
        price=event.target.value
        // console.log(price);
    }
    quantity=parseFloat(quantity)
    price=parseFloat(price)
    // console.log(quantity);
    console.log(price*quantity);
    let taxRate=document.getElementById("taxRate")
    let discountRate=document.getElementById("discountRate")

    let amount=document.getElementById("amount")
    amount.innerText=quantity*price
})

// changing currency sign
let currency=document.querySelector(".currency")

let currency_change=document.querySelectorAll(".currency_change")
currency.addEventListener("input",()=>{
    for(let i=0;i<currency_change.length;i++){
        currency_change[i].innerHTML=`${currency.value}`
    }
})