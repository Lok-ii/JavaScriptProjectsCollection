import {products} from "./data.js";

console.log(products);



window.onload = ()=>{
    const productList = document.querySelector(".product-list");
    products.forEach((item)=>{
        let freeDelivery = "";
        let fAssured = "";
        if(item.deliveryIn1Day === true){
            freeDelivery = "Free Delivery"
        }
        if(item.flipkartAssured === true){
            fAssured = "./Assets/fa_62673a.png"
        }
        let ratingValue = Math.floor(Math.random() * 5000);
        let div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `<i class="fa-solid fa-heart"></i>
        <img class="productImage" src="${item.image}" alt="">
        <span class="productName">${item.title}</span>
        <span class="productColor">${item.color}</span>
        <div class="rating">
            <div class="ratingContainer">
                <span class="rating-value">${item.rating}</span>
                <i class="fa-solid fa-star"></i>
            </div>
            <span class="ratingCount">(${ratingValue})</span>
            <img class="f-assured" src="${fAssured}" alt="">
        </div>
        <div class="price">
            <span class="newPrice">₹${item.specialPrice}</span>
            <del class="oldPrice">₹${item.price}</del>
            <div class="discountContainer">
                <span class="discount">₹${item.discountPrice}</span><span> off</span>
            </div>
        </div>
        <span class="delivery" name="Free">${freeDelivery}</span>`;

        productList.appendChild(div);
    });
}


let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(rangeInput[0].value);
      let maxRange = parseInt(rangeInput[1].value);
      if (maxRange - minRange < rangeMin) {     
        if (e.target.className === "min") {
          rangeInput[0].value = maxRange - rangeMin;        
        } else {
          rangeInput[1].value = minRange + rangeMin;        
        }
      } else {
        rangePrice[0].value = minRange;
        rangePrice[1].value = maxRange;
        range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
      }
    });
  });