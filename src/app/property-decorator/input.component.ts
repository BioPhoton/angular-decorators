import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <h2>Input child component</h2>
    <pre>
      value: {{value | json}}
    </pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input()
  state;

  // @MultiplyBy(2)
  value;

  constructor() {
    console.log('CTRO input child', this.value);
    this.value = 3;
    console.log('CTRO input child after set', this.value);
  }

}
