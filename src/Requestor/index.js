'use strict';
const Request = require('request');
const Config = require('../Config');
const btoa = require('btoa');

class Requestor {

    constructor() {
     this.baseUrl = Config.environment == 'production' ? 'https://api.spektra.co' : 'https://api-test.spektra.co';
     this.version = 'api/v1';
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
           let url = `${this.baseUrl}/${this.version}/checkout/initiate`;
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

           Request({method:'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}, body:payload, json:true},(error,response,body) => {
            resolve(body);

             if (error) {
               reject(new Error("Error :",error));
             }
          });
      });
    }

    generatePayment(data, tokenObj) {
      return new Promise((resolve,reject) => {
        let url = `${this.baseUrl}/${this.version}/payments/pay-in`;
        const {access_token: token} = tokenObj;
        let auth = `Bearer ${token}`;
        let params = {
          account: data.account,
          spektraAccountName: data.spektraAccountName ? data.spektraAccountName :undefined,
          amount: data.amount,
          voucherCode: data.voucherCode ? data.voucherCode : undefined
        };

        Request({method:'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}, body:params, json:true},(error,response,body) => {
          resolve(body);

           if (error) {
             reject(new Error("Error :",error));
           }
        });

      });
    }

    payMobile(data, tokenObj) {
      return new Promise((resolve,reject) => {
        let url = `${this.baseUrl}/${this.version}/payments/send-money/mobile`;
        const {access_token: token} = tokenObj;
        let auth = `Bearer ${token}`;
        let params = {
          account : data.account,
          amount: data.amount
        }

        Request({method:'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}, body:params, json:true},(error,response,body) => {
          resolve(body);

           if (error) {
             reject(new Error("Error :",error));
           }
        });


      });
    }


    payTillNumber(data, tokenObj) {
      return new Promise((resolve,reject) => {
        let url = `${this.baseUrl}/${this.version}/payments/till`;
        const {access_token: token} = tokenObj;
        let auth = `Bearer ${token}`;
        let params = {
          account : data.account,
          amount: data.amount
        }

        Request({method:'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}, body:params, json:true},(error,response,body) => {
          resolve(body);

           if (error) {
             reject(new Error("Error :",error));
           }
        });


      });

    }

    payBankAccount(data, tokenObj) {
      let url = `${this.baseUrl}/${this.version}/payments/bank`;
      const {access_token: token} = tokenObj;
      let auth = `Bearer ${token}`;

      let params = {
        account: account,
        accountName: accountName,
        bankName: bankName,
        bankBranch: bankBranch,
        amount: amount
      }

      
      Request({method:'post',url:url,headers:{'Authorization':auth,'Content-Type':'application/json'}, body:params, json:true},(error,response,body) => {
        resolve(body);

         if (error) {
           reject(new Error("Error :",error));
         }
      });

    }


    getHeaderKey(public_key,secret_key) {
        return btoa(public_key+':'+secret_key);
        
    }
}

module.exports = Requestor;