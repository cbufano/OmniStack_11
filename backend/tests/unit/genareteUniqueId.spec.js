
const generateUniqueId = require('../../src/utils/genareteUniqueId');


describe('Genarete Imoque ID', () =>{
  it('should genarete an unique ID' , () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);

    
  })
})