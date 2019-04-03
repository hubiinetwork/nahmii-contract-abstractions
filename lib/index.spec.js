require('chai').should();
const index = require('./index');

describe('index', () => {
    describe('get', () => {
        describe('if called with name of existent contract abstraction', () => {
            it('should successfully return the matching contract abstraction', async () => {
                const abstn = index.get('ClientFund');
                abstn.contractName.should.equal('ClientFund');
                abstn.abi.should.be.an('array').that.is.not.empty;
            });
        });

        describe('if called with name of non-existent contract abstraction', () => {
            it('should throw an instance of Error', async () => {
                (() => index.get('NonExistentContract')).should.throw(Error);
            });
        });
    })
});
