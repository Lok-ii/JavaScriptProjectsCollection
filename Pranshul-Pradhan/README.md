# Payment Integeration

# Table of Contents
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Challenges Faced](#challenges-faced)
  - [References](#references)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction
The Payment Integeration project is a web based project showing the product pay button linking with the razorpay pay payment integeration. This application is built using HTML, CSS, and JavaScript to provide a user-friendly interface for generating invoices quickly and efficiently.

## Features

- User-Friendly Interface.
- Picking up prices of the product
- Order id creation for each product
- payment validation as success or failure

## Technologies Used

- HTML
- CSS
- JavaScript

## Challenges Faced

During the development of this payment integeration, I encountered several challenges, especially when working with the RazorPay order API. When trying to fetch the order api detail it was showing the Access Allow origin error which was preventing from creating the order id which was necessary for opening the payment popup.
This was resolved by CORS proxy use.

Then for fetching each product different prices also was facing issue so then used data id to fetch each product value to be passed.

Then for applying the event listner to each pay button, used loop.

Despite the challenges encountered, each obstacle presented an opportunity for growth and improvement. Overcoming these hurdles not only enhanced the functionality of the Payment integeration but also provided valuable insights into the intricacies of web development and user experience design.

## References

I would like to acknowledge the following resources that were instrumental in the development of this Chrome extension:

- [Stack Overflow](https://stackoverflow.com/): The Stack Overflow community provided solutions to specific coding challenges and troubleshooting advice.

- [RazorPay Documentation](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/): Razorpay documentation for api to be used and payment integeration

Feel free to explore these resources for more in-depth understanding or clarification on specific topics.


## Contributing

Feel free to contribute to the development of this extension. Fork the repository, make your changes, and submit a pull request.

## License

This project is created for learning purposes. There is no specific license associated with it.

## Contact

For any questions or suggestions, you can contact pradhanpranshul@gmail.com

