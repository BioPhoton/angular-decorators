import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ClassDecoratorComponent } from './class-decorator/class-decorator.component';
import {InputContainerComponent} from './property-decorator/input-container.component';
import {InputComponent} from './property-decorator/input.component';
import {Input2Component} from './property-decorator/input2.component';
import { PropertyDecoratorComponent } from './property-decorator/property-decorator.component';
import { MethodDecoratorComponent } from './method-decorator/method-decorator.component';
import { DecoratorFactoryComponent } from './decorator-factory/decorator-factory.component';
import { AccessorDecoratorComponent } from './accessor-decorator/accessor-decorator.component';
import { ParameterDecoratorComponent } from './parameter-decorator/parameter-decorator.component';

export const APP_ROUTES: Routes = [
  {
    path: 'class-decorator',
    component: ClassDecoratorComponent
  },
  {
    path: 'method-decorator',
    component: MethodDecoratorComponent
  },
  {
    path: 'accessor-decorator',
    component: AccessorDecoratorComponent
  },
  {
    path: 'property-decorator',
    component: PropertyDecoratorComponent
  },
  {
    path: 'parameter-decorator',
    component: ParameterDecoratorComponent
  },
  {
    path: 'decorator-factory',
    component: DecoratorFactoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClassDecoratorComponent,
    PropertyDecoratorComponent,
    MethodDecoratorComponent,
    DecoratorFactoryComponent,
    AccessorDecoratorComponent,
    ParameterDecoratorComponent,
    InputContainerComponent,
    InputComponent,
    Input2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
