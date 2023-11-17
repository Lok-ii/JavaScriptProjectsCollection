let boardCase = document.querySelector(".board-case");

boardCase.addEventListener("click", (e)=>{
    if(e.target.classList.contains("board-add-card")){
        console.log("added");
    }
});