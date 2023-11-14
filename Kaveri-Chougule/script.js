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