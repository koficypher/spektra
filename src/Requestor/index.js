'use strict';
const Request = require('request');
const Config = require('../Config');
const btoa = require('btoa');

class Requestor {

    constructor() {
     this.baseUrl = Config.environment == 'production' ? 'https://api.spektra.co' : 'https://api-test.spektra.co';
    }

      getToken() {
      return new Promise((resolve,reject) => {
        let url = `${this.baseUrl}/oauth/token?grant_type=client_credentials`;
        let sig =  this.getHeaderKey(Config.public_key,Config.secret_key);
        let auth = `Basic ${sig}`;

        Request({method: 'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}},(error,response,body) => {
             resolve(body);
              if (error) {
                reject(new Error("Error :",error));
              }
        });
      });
       
    }

     generateCheckOutPay(data,tokenObj) {
      return new Promise((resolve,reject) => {
           let url = `${this.baseUrl}/api/v1/checkout/initiate`;
           const { amount, currency, description, spektraAccountName, successURL, cancelURL} = data;
           const {access_token: token} = tokenObj;
           let auth = `Bearer ${token}`;
           let payload = {
             amount : amount,
             currency : currency,
             description : description,
             spektraAccountName : spektraAccountName,
             successURL : successURL,
             cancelURL : cancelURL
           };

          // let payload = JSON.parse(load);

           Request({method:'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}, body:payload, json:true},(error,response,body) => {
            resolve(body);

             if (error) {
               reject(new Error("Error :",error));
             }
          });
      });
    }

    getHeaderKey(public_key,secret_key) {
        return btoa(public_key+':'+secret_key);
        
    }
}

module.exports = Requestor;