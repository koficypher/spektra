# Spektra Pay 
[![Build Status](https://travis-ci.org/koficypher/spektra.svg?branch=master)](https://travis-ci.org/koficypher/spektra)

Spektra Pay is the unofficial Javascript SDK for [Spektra](https://spektra.co) payment platform.
It takes a [Promise](https://medium.com/@PangaraWorld/an-introduction-to-understanding-javascript-promises-37eff85b2b08) based or [Async Await](https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb) approach. Its been made to be very simple and easy to use.

## Installation
 - First head over to [https://spektra.co](https://spektra.co) to create an account. Submit all relevant documents to be able  to go live.
 - Head over to your dashboard and to the developers page. Generate new public and secret keys and or copy the existing ones over to your project.
 - Install the SDK by typing `npm install @koficypher/spektra`
 - In your project create a `.env` file and place it in your project's base path. We have a sample
 `.env.example` in this repo for you to take a look at.
 - In your `.env` file update the `PUBLIC_KEY` AND `SECRET_KEY` accordingly
 - Do not forget to specify which environment you want to run in by also editing the `ENVIRONMENT` key in the `.env`. If you specify to run a development as the `ENVIRONMENT` you must
 - Also not that if you specify  development `ENVIRONMENT` key in your `.env` file, kindly note that all request and transactions will be against a sandbox account. You can head over [here](https://sandbox.spektra.co) to create a sandbox account, generate and copy the public and secret keys accordingly and paste them in your `.env` file.
 - You are now ready to recieve payments.

 ## Usage
 Using this SDK is very simple. To get started you have to require and instantiate it like so:
 ```javascript
  const Spektra = require('@koficypher/spektra')

  const Pay = new Spektra();
 ``` 
 ### Request Payment
 To request payment from a mobile number, you need to pass the ff parameters into an object:
```javascript
let data = {
             account: "254797123456",
             spektraAccountName: "mysubaccount", //optional, used for subaccount-specific payments
             amount: 1000
           }
```

- `account` is the mobile number you want to request payment from. The number should always follow the [MSIDN](https://www.webopedia.com/TERM/M/MSISDN.html) format. e.g. 254797123456
- `spektraAccountName` is the an optional parameter which is used if you want to accept payments or request payments on behalf of a subaccount or business.
- `amount ` is the amount you wish to charge.

The next step is to call this method off this SDK's instance and pay the data object as a parameter. Console log the response to see the results.

`Pay.receivePayment(data).then(resp => { console.log(resp) });`


### PayOut To Mobile Number
The Spektra API also allows you to transfer money from your Spektra account to any mobile money number directly. To do that, you will need to construct a data object and call another method off the SDK's instance. 
```javascript 

const Spektra = require('@koficypher/spektra')

const Pay = new Spektra();

let data = {
             account: "254797123456",
             amount: 1000
           }

Pay.payMobileNumber(data).then(resp => {
 console.log(resp);
});
```

### PayOut To Merchant's Till Number
Mobile money merchants are not left out. With Spektra you can also pay directly to merchants using their till number.
```javascript 

const Spektra = require('@koficypher/spektra')

const Pay = new Spektra();

let data = {
             account: "12458",
             amount: 1000
           }

Pay.payTillNumber(data).then(resp => {
 console.log(resp);
});
```
In this example, `account` is the till number.

### PayOut To A Bank
You can also pay Banks directly from your Spektra account. You will need to add your bank details such as name of the account holder, bank name  and branch.

```javascript 

const Spektra = require('@koficypher/spektra')

const Pay = new Spektra();

let data = {
                account: "123456789012",
                accountName: "John Doe",
                bankName: "ABC Bank",
                bankBranch: "Nairobi",
                amount: 1000
           }

Pay.payToBank(data).then(resp => {
 console.log(resp);
});
```
## Want To Collaborate ?
Email me `skcypher6@gmail.com`

## Bugs or Feature Request ?
Email me `skcypher6@gmail.com`
Open an issue in this repo if you detect any bugs.