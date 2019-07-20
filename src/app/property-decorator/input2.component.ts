import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MultiplyByRight, MultiplyByWrong} from './property.decorator';

@Component({
  selector: 'app-input2',
  template: `
    <h2>Input2 child component</h2>
    <pre>
      value: {{value | json}}
    </pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Input2Component {

  @Input()
  state;

 // @MultiplyBy(2)
  value;

  constructor() {
    console.log('CTRO2 input child', this.value);
    // this.value = 3;
    // console.log('CTRO2 input child after set', this.value);


    console.log('create t1');
    const t1 = new Test();
    console.log('set t1 value to 5');
    t1.value = 5;
    console.log('get t1 value', t1.value);

    console.log('set t1 value2 to 5');
    t1.value2 = 5;
    console.log('get t1 value2', t1.value2);

    console.log('create t2');
    const t2 = new Test();
    console.log('get t2 value', t2.value);
    console.log('get t2 value2', t2.value2);

  }




}

class Test {
  @MultiplyByWrong(4)
  value;

  @MultiplyByRight(3)
  value2;
}
