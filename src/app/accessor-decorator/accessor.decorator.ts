/*
* All decorators for the member must be applied to the first accessor specified in document order.
* The expression for the accessor decorator will be called as a function at runtime.
* If the accessor decorator returns a value, it will be used as the Property Descriptor for the member.
**/
export function accessorDecorator(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {

}

