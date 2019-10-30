const Spektra = require('../src/spektra');
const Requestor = require('../src/Requestor');
const btoa = require('btoa');
const atob = require('atob');

describe('Beginning Spektra SDK Tests', () => {

   it('checking jest', () => {
     expect(100).toBeGreaterThan(1)
   });
   
   it('checking if token is defined' , async() => {
      const Requesty = new Requestor();
      const token = await Requesty.getToken();
      const {access_token } = JSON.parse(token);
      expect(access_token).toBeDefined();
   });
});