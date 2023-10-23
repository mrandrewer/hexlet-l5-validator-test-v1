import BaseSchema from './BaseSchema.js';

class StringSchema extends BaseSchema {
  constructor() {
    super();
    this.addValidator((value) => typeof value === 'string');
  }
}

export default StringSchema;
