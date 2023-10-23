import BaseSchema from './BaseSchema.js';

class NumberSchema extends BaseSchema {
  constructor() {
    super();
    this.addValidator((value) => typeof value === 'number');
  }

  even() {
    this.addValidator((value) => value % 2 === 0);
    return this;
  }

  odd() {
    this.addValidator((value) => value % 2 !== 0);
    return this;
  }
}

export default NumberSchema;
