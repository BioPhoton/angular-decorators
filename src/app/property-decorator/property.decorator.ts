/*
* The return value is ignored.
* As such, a property decorator can only be used
* to observe that a property of a specific name
* has been declared for a class.
**/
/*
export function propertyDecorator() {
  return (
    target: any,
    propertyKey: string
  ) => {
    console.log(`propertyKey declared: ${propertyKey in target}`);
  };
}
*/

/*
export function _ObserveProperty<T>(observedPropertyKey) {
  const propertySymbol = Symbol();

  return (target: T, propertyKey: PropertyKey) => {
    Object.defineProperty(target, propertyKey, {get: getChangesObservable});
    Object.defineProperty(target, observedPropertyKey, {get: getValue, set: setValue});
  };

  interface Property {
    hasValue?: boolean;
    currentValue?: any;
    changesObservable?: Observable<any>;
    changesSubject?: ReplaySubject<any>;
  }

  function getProperty(instance: { [propertySymbol]: Property }) {
    const property = instance[propertySymbol] || (instance[propertySymbol] = {});

    if (property.hasValue === undefined) {
      property.hasValue = false;
    }

    if (property.changesSubject === undefined) {
      property.changesSubject = new ReplaySubject(1);
      property.changesObservable = property.changesSubject.asObservable();
    }

    return property;
  }

  function getChangesObservable(this: any) {
    return getProperty(this).changesObservable;
  }

  function getValue(this: any) {
    return getProperty(this).currentValue;
  }

  function setValue(this: any, value: any) {
    const property = getProperty(this);
    const oldValue = property.currentValue;
    const firstChange = !property.hasValue;

    property.hasValue = true;
    property.currentValue = value;

    if (firstChange || value !== oldValue) {
      property.changesSubject.next(value);
    }
  }
}
*/

export function MultiplyByWrong<T>(multiplyBy): PropertyDecorator {
  console.log('MultiplyByWrong created:', multiplyBy);

  return (target: T, propertyKey: PropertyKey) => {
    console.log('MultiplyByWrong executed:', target, propertyKey);

    function timesX(v) {
      return v * multiplyBy;
    }

    let value;

    Object.defineProperty(target, propertyKey, {
      get() {
        console.log(`MultiplyByWrong get ${String(propertyKey)}`, value);
        return value;
      },
      set(newValue: any) {
        value = timesX(newValue);
        console.log(`MultiplyByWrong set ${String(propertyKey)}`, value);
      }
    });

  };

}

export function MultiplyByRight<T>(multiplyBy): PropertyDecorator {
  console.log('MultiplyByRight created:', multiplyBy);

  return (target: T, propertyKey: PropertyKey) => {
    const uniqueKey = Symbol();
    console.log('MultiplyByRight executed:', this, target, propertyKey, uniqueKey);

    const propDef = {
      get: function get() {
        console.log(`MultiplyByRight get ${String(propertyKey)}`, uniqueKey);
        return this[uniqueKey];
      },
      set: function set(newValue: any) {
        this[uniqueKey] = timesX(newValue);
        console.log(`MultiplyByRight set ${String(propertyKey)}`, uniqueKey);
      }
    };

    Object.defineProperty(target, propertyKey, propDef);
    // return propDef;

    function timesX(v) {
      return v * multiplyBy;
    }

  };

}

