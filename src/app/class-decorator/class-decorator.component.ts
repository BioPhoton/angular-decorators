import {Component} from '@angular/core';

@Component({
  selector: 'app-class-decorator',
  template: `
    <p>
      class-decorator works!
    </p>
  `,
  styles: []
})
export class ClassDecoratorComponent {

  constructor() {
    console.log('ClassDecoratorComponent`s this: ', this);
  }

}
