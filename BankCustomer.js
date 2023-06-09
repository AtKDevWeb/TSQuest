"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, WordPass) {
        this._nameClient = name;
        this._cardWordPass = WordPass;
    }
    BankCustomer.prototype.getName = function () {
        return this._nameClient;
    };
    BankCustomer.prototype.verifyPinInput = function (pinInput) {
        if (pinInput === this._cardWordPass) {
            return true;
        }
        return false;
    };
    ;
    return BankCustomer;
}());
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
