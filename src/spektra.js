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
}

module.exports = Spektra;