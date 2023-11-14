// let currentDate=document.querySelector(".current-date-text")
let current_date=document.querySelector(".current-date")
let date = new Date();
let day=date.getDate();
let month=date.getMonth();
let year=date.getFullYear()
console.log(day);
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
// let total_amount=0;
// function calculation(ele){
//     // let index=$(ele).parent().parent().index();
//     let index=ele.target.value
//     console.log(index);

//     // let quantity=document.getElementsByName("quantity")[index].value
//     // console.log(quantity);

//     // let rate=document.getElementsByName("price")[index].value
//     // console.log(rate);

//     // total_amount+=quantity*rate
//     // console.log(total_amount);
//     // document.getElementById("total_amount").innerText=total_amount
//     // console.log(total_amount);
// }

let table_row=document.getElementById("table-row")
table_row.addEventListener("keypress",(event)=>{
    if(event.target.className=== "quantity"){
        let quantity=event.target.value
        console.log();
    }
})