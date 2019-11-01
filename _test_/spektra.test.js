const Spektra = require('../src/spektra');
const Requestor = require('../src/Requestor');
jest.mock('../src/Requestor');

describe('Beginning Spektra SDK Tests', () => {

   beforeEach(() => {
      // Clear all instances and calls to constructor and all methods:
      Requestor.mockClear();
    });
   

   it('checking jest', () => {
     expect(100).toBeGreaterThan(1)
   });
   
   it('checking if Requestor has been called' , async () => {
       const Spektray = new Spektra();
       expect(Requestor).toHaveBeenCalledTimes(1);
   }); 
});