/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
	  this._currency = currency;
  }

  get amount() {
    return (this._amount);
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return (this._currency);
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    } else {
    this._currency = value;
    }
  }

  displayFullPrice() {
    const returnValue = `${this._amount} ${this.currency.displayFullCurrency()}`;
    return (returnValue);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
