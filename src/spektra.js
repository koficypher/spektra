'use strict';
const Requestor = require('./Requestor')

class Spektra {

    constructor() {
        this.requestor = new Requestor()
    }
    
    async fetchToken() {
         try {
            let token = await this.requestor.getToken();
            return token;
         } catch (error) {
             return error;
         }
   }

   async checkOutPay(data) {
       try {
           let token = await this.requestor.getToken();
           let tokenObj = JSON.parse(token);
           let results = await this.requestor.generateCheckOutPay(data,tokenObj);
           return results;
       } catch (error) {
        return error;
       }
   }
}

module.exports = Spektra;