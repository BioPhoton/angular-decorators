import {Component} from '@angular/core';
// import {observeMethodDecorator} from './method.decorator';

@Component({
  selector: 'app-method-decorator',
  template: `
    <p>
      method-decorator works!
    </p>
  `,
  styles: []
})
export class MethodDecoratorComponent {

  constructor() {
    console.log(this.test);
    this.test = 0;
    console.log(this.test);
  }

 // @observeMethodDecorator
  test = 9;

  method1(arg) {
    console.log('in original method1 arg: ', arg);
  }

}
