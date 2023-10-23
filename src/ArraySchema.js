import BaseSchema from './BaseSchema.js';

class ArraySchema extends BaseSchema {
  constructor() {
    super();
    this.addValidator((value) => Array.isArray(value));
  }

  length(len) {
    this.addValidator((value) => value.length === len);
    return this;
  }
}

export default ArraySchema;
