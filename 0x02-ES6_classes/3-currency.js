/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return (this._code);
  }
  
  set code(value) {
   if (typeof value !== 'String') {
     throw new TyeError('Code must be a string');
   } else {
     this._code = value;
   }
  }

  get name() {
    return (this._name);
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  displayFullCurrency() {
    const result = `${this._name} (${this._code})`;
    return (result);
  }
}
