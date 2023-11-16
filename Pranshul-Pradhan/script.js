
const username = "rzp_test_fVf9IWxfnAHqiV";
const password = "1XRpJwd4lLqRoGEzBJmQiYrI";
// const amountpaid = document.getElementById("price").innerText;
// console.log("amountPaid", amountpaid);

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var payButton = document.getElementsByClassName("pay-button");
  console.log("paybtn length", payButton.length);
  for(var i =0;i<payButton.length;i++){
    payButton[i].addEventListener("click", function (event) {
      console.log("event",event);
      event.preventDefault();
      // Get the data-id attribute value
      var dataId = event.currentTarget.getAttribute('data-id');
      console.log("data-id",dataId);
  
      // Use the data-id to select the corresponding price element
      var priceElement = document.querySelector('[data-id="' + dataId + '"]');
  
      // Get the price from the price element
      var price = priceElement.textContent;
      // const amountpaid = (document.getElementById("price").innerText)*100;
      console.log("amountPaid", price*100);
      // Make the first API request to get the order ID
      makeFirstApiRequest(price*100);
    });
  }

  
  function makeFirstApiRequest(amountpaid) {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
    var accessToken = btoa(`${username}:${password}`);
    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.razorpay.com/v1/orders');
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + accessToken,
      },
      body: JSON.stringify({
        // Include any necessary data in the request body
        amount: amountpaid,
        currency: "INR",
        receipt: "qwsaq1",
        partial_payment: true,
        first_payment_min_amount: 230,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        // Extract the order ID from the response
        var orderId = data.order_id;

        // Use the order ID to initiate the Razorpay payment
        initiateRazorpayPayment(orderId, amountpaid);
      })
      .catch((error) => {
        console.error("Error making first API request:", error);
      });
  }

  function initiateRazorpayPayment(orderId, amountpaid) {
    var options = {
        "key": "rzp_test_pbp0v4wadM2etX", // Enter the Key ID generated from the Dashboard
        "amount": amountpaid, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "RED Store", //your business name
        "description": name,
        "image": "https://example.com/your_logo",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

});
