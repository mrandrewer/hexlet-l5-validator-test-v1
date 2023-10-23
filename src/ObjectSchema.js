import BaseSchema from './BaseSchema.js';

class ObjectSchema extends BaseSchema {
  constructor() {
    super();
    this.addValidator((value) => typeof value === 'object');
  }

  shape(schema) {
    this.addValidator((value) => {
      const keys = Object.keys(value);
      const schemaKeys = Object.keys(schema);
      if (keys.length !== schemaKeys.length) {
        return false;
      }
      return schemaKeys.every((k) => schema[k].isValid(value[k]));
    });
    return this;
  }
}

export default ObjectSchema;
