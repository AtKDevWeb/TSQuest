import * as assert from 'assert';

class BankCustomer {

    private _nameClient : string; 
    private _cardWordPass : string;

    constructor ( name : string , WordPass:string) {
        this._nameClient = name; 
        this._cardWordPass = WordPass;
    }
    public getName () : string {
        return this._nameClient;
        
    }
    public verifyPinInput (pinInput : string): boolean { 
        if (pinInput === this._cardWordPass) { return true; } 
        return false ;
} ;
        
    

}


const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));