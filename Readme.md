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
 - You are now ready to recieve payments.

 ## Usage
 Using this SDK is very simple. To get started you have to require and instantiate it like so:
 ```javascript
  const Spektra = require('@koficypher/spektra')

  const Pay = new Spektra();
 ``` 


