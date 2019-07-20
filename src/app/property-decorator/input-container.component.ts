import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {interval} from 'rxjs';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'app-input-container',
  template: `
    <h1>Input container</h1>
    <!--
    <pre>
      value in container: {{state$ | async | json}}
      value in container: {{state2$ | async | json}}
    </pre>
    -->
    <!-- switch to push pipe after ivy fix -->
    <app-input [state]="state$ | async"></app-input>
    <app-input2 [state]="state$ | async"></app-input2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputContainerComponent {

  state$ = interval(1000)
    .pipe(
      map(value => ({value: Math.random()})),
      share()
    );

  constructor() {
    console.log('InputContainerComponent');
  }

}
