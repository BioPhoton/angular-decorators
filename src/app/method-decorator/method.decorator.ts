/*
* The decorator is applied to the Property Descriptor for the method,
* and can be used to observe, modify, or replace a method definition.
* If the method decorator returns a value,
* it will be used as the Property Descriptor for the method.
*
* https://www.javascripture.com/PropertyDescriptor
*/

/*
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export function MakeObservable(eventName): Function {
  return function(component: any, inputName: string, descriptor: PropertyDescriptor): Observable<any> {
    const innerSB = new Subject();
    const retour = innerSB.asObservable();

    Object.defineProperty(component, inputName, {
      set: newValue => innerSB.next(newValue),
      get: () => retour,
      enumerable: true,
      configurable: true
    });
    return retour;
  };
}


export function observeMethodDecorator<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): void {
  const subj;

  const originalSet = descriptor.set;
  descriptor.set = (value: T) => {
    console.log('set observed');
    // tslint:disable-next-line:no-unused-expression
    originalSet && originalSet.call(target, value);
  };

  const originalGet = descriptor.get;
  descriptor.get = () => {
    console.log('get observed', originalGet.call(target));
    // tslint:disable-next-line:no-unused-expression
    return originalGet && originalGet.call(target);
  };
}
/*
export function replaceMethodDecorator(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  target[propertyKey] = (...args) => {
    console.log('replaceMethodDecorator', args);
  };
  return target[propertyKey];
}

*/

