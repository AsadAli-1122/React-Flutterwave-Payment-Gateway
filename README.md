# React Flutterwave Payment Gateway

## Description
This is a simple React application that integrates the Flutterwave payment gateway. It provides a smooth payment experience, ensuring zero errors during transactions. Additionally, it detects offline mode and prompts users to reconnect when they lose internet connectivity.

## What is it for?
This project allows you to easily accept online payments through Flutterwave in a React-based web application. It offers a user-friendly payment form where customers can enter their payment details and make transactions securely.

## How to Run
To run this project locally, follow these steps:

1. Clone this repository:
```bash
  git clone https://github.com/AsadAli-1122/React-Flutterwave-Payment-Gateway
```

2. Navigate to the project directory:
```bash
  cd React-Flutterwave-Payment-Gateway
```

3. Install dependencies using npm:
```bash
  npm install
```

4. Replace the public key in `app.js` with your Flutterwave public key.
```bash
    public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY",
```

5. Start the application:
```bash
  npm start
```

6. Use the following test card details for testing:
- Card Number: 4187427415564246 (or use other test cards provided)
- Expiry Date: 09/32 (or use other valid dates)
- CVV: 828 (or use other test CVVs)
- OTP: 123456 (or use other test OTPs)

7. View the payment results in the console.

## Note
Please ensure that you have a Flutterwave account and valid public and secret API keys configured for this project. This is a sample project, and you should handle sensitive payment information securely in a production environment.

