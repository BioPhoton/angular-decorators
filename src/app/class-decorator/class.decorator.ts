/*
* If the class decorator returns a value
* it will replace the class declaration with the provided constructor function.
* If you return a new constructor function, you must take care to maintain the original prototype.
*/

export function ClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  console.log('ClassDecorator applied', constructor);
  return class extends constructor {
    myProperty = 'value of property defined by decorator';
  };
}


