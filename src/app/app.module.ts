import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingOneWayComponent } from './Demos/binding/binding-one-way/binding-one-way.component';
import { BindingTwoWayComponent } from './Demos/binding/binding-two-way/binding-two-way.component';
import { EventBindingComponent } from './Demos/binding/event-binding/event-binding.component';
import { AttributeBindingComponent } from './Demos/binding/attribute-binding/attribute-binding.component';
import { DemosPipesComponent } from './Demos/Pipes/demos-pipes/demos-pipes.component';
import { DirectivesComponent } from './Demos/directives/directives.component';
import { ChildComponent } from './Demos/inputOuput/child/child.component';
import { ParentComponent } from './Demos/inputOuput/parent/parent.component';
import { DemoServiceComponent } from './Demos/demo-service/demo-service.component';
import { FormulaireComponent } from './Demos/formulaire/formulaire.component';
import { RouterComponent } from './Demos/router/router/router.component';
import { SnapshotParamsComponent } from './Demos/router/snapshot-params/snapshot-params.component';
import { FakeAuthComponent } from './Demos/fake-auth/fake-auth.component';
import { ObservablesComponent } from './Demos/observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './Demos/http-client/http-client.component'

@NgModule({
  declarations: [
    AppComponent,
    BindingOneWayComponent,
    BindingTwoWayComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    DemosPipesComponent,
    DirectivesComponent,
    ChildComponent,
    ParentComponent,
    DemoServiceComponent,
    FormulaireComponent,
    RouterComponent,
    SnapshotParamsComponent,
    FakeAuthComponent,
    ObservablesComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
