import {PARAMETERS} from '../blueprint';

export function makeParamDecorator(
  name: string, props?: (...args: any[]) => any, parentClass?: any): any {
  // const metaCtor = makeMetadataCtor(props);

  function ParamDecoratorFactory(...args: any[]): any {
    if (this instanceof ParamDecoratorFactory) {
     // metaCtor.apply(this, args);
      return this;
    }
    const annotationInstance = new (<any>ParamDecoratorFactory)(...args);

    (<any>ParamDecorator).annotation = annotationInstance;
    return ParamDecorator;

    function ParamDecorator(cls: any, unusedKey: any, index: number): any {
      // Use of Object.defineProperty is important since it creates non-enumerable property which
      // prevents the property is copied during subclassing.
      const parameters = cls.hasOwnProperty(PARAMETERS) ?
        (cls as any)[PARAMETERS] :
        Object.defineProperty(cls, PARAMETERS, {value: []})[PARAMETERS];

      // there might be gaps if some in between parameters do not have annotations.
      // we pad with nulls.
      while (parameters.length <= index) {
        parameters.push(null);
      }

      (parameters[index] = parameters[index] || []).push(annotationInstance);
      return cls;
    }
  }

  if (parentClass) {
    ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  ParamDecoratorFactory.prototype.ngMetadataName = name;
  (<any>ParamDecoratorFactory).annotationCls = ParamDecoratorFactory;
  return ParamDecoratorFactory;
}
