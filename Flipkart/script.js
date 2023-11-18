import { products } from "./data.js";

// Function to render products
let addProducts = (list = products) => {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";
  list.forEach((item) => {
    let freeDelivery = "";
    let fAssured = "";
    if (item.deliveryIn1Day === true) {
      freeDelivery = "Free Delivery";
    }
    if (item.flipkartAssured === true) {
      fAssured = "./Assets/fa_62673a.png";
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
};

let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

// Function for changing price on sliding the price bar
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
    let filteredList=[];
        filteredList = products.filter((product) => product.specialPrice >= minRange && product.specialPrice <= maxRange);
        addProducts(filteredList);
  });
});

let sortItemsList = document.querySelectorAll(".sort-item");
let sortItems = () => {
  sortItemsList.forEach((element) => {
    element.id = "";
  });
};

//Sorting
let sortOptions = document.querySelector(".sortOptions");
sortOptions.addEventListener("click", (e) => {
  let sortedList = "";
  if (e.target.classList.contains("popularity")) {
    sortItems();
    e.target.id = "selected";
    sortedList = products.sort((a, b) => b.popularity - a.popularity);
    addProducts(sortedList);
  } else if (e.target.classList.contains("low-to-high")) {
    sortItems();
    e.target.id = "selected";
    sortedList = products.sort((a, b) => a.specialPrice - b.specialPrice);
    addProducts(sortedList);
  } else if (e.target.classList.contains("high-to-low")) {
    sortItems();
    e.target.id = "selected";
    sortedList = products.sort((a, b) => b.specialPrice - a.specialPrice);
    addProducts(sortedList);
  }
});

let filterList = document.querySelector(".filters-list");
filterList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("discountsHeading") ||
    e.target.classList.contains("typeHeading") ||
    e.target.classList.contains("offerHeading") ||
    e.target.classList.contains("brandHeading") ||
    e.target.classList.contains("cRatingHeading")
  ) {
    e.target.parentElement.classList.toggle("toggleHeight");
    e.target.lastElementChild.classList.toggle("toggleArrow");
  }
});

window.onload = addProducts();


// Function to filter products
function filterProducts() {
  let filteredProducts = [...products]; // Start with all products

  // Apply filters based on the state of checkboxes
  if (document.getElementById('fassured').checked) {
      filteredProducts = filteredProducts.filter(product => product.flipkartAssured);
  }

  if(document.getElementById("oneDayDelivery").checked){
    filteredProducts = filteredProducts.filter(product => product.deliveryIn1Day);
  }

  document.querySelectorAll(".offers input").forEach(element =>{
    if(element.checked && element.nextElementSibling.innerText === "No Cost EMI"){
      filteredProducts = filteredProducts.filter(product=> product.noCostEMI);
    } 
    if(element.checked && element.nextElementSibling.innerText === "specialPrice"){
      filteredProducts = filteredProducts.sort((a, b)=> a.specialPrice > b.specialPrice);
    }
  });

  document.querySelectorAll(".brands input").forEach(element=>{
    let brandName = element.name;
    if(element.checked){
      filteredProducts = filteredProducts.filter(product=> product.title.includes(brandName));
    }
  });

  document.querySelectorAll(".cRatings input").forEach(element =>{
    let ratingElementValue = element.value;
    if (element.checked) {
      filteredProducts = filteredProducts.filter(product => product.rating > ratingElementValue);      
    }
  });

      filteredProducts = filteredProducts.filter(product=> product.specialPrice >= rangeInput[0].value && product.specialPrice <= rangeInput[1].value);
  //render the filteredProducts on the page
  addProducts(filteredProducts);
}


// Attach the filterProducts function to the change event of all checkboxes
document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});