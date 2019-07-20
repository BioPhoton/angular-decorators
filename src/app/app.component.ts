import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
    <h1>Decorator tests</h1>
    <ul>
      <li>
        <a routerLink="class-decorator">
          class-decorator
        </a>
      </li>
      <li>
        <a routerLink="method-decorator">
          method-decorator
        </a>
      </li>
      <li>
        <a routerLink="accessor-decorator">
          accessor-decorator
        </a>
      </li>
      <li>
        <a routerLink="property-decorator">
          property-decorator
        </a>
      </li>
      <li>
        <a routerLink="parameter-decorator">
          parameter-decorator
        </a>
      </li>
      <li>
        <a routerLink="decorator-factory">
          decorator-factory
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'ng-decorators';
}
