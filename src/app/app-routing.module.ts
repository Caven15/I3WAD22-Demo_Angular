import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AttributeBindingComponent } from './Demos/binding/attribute-binding/attribute-binding.component';
import { BindingOneWayComponent } from './Demos/binding/binding-one-way/binding-one-way.component';
import { BindingTwoWayComponent } from './Demos/binding/binding-two-way/binding-two-way.component';
import { EventBindingComponent } from './Demos/binding/event-binding/event-binding.component';
import { DemoServiceComponent } from './Demos/demo-service/demo-service.component';
import { DirectivesComponent } from './Demos/directives/directives.component';
import { FakeAuthComponent } from './Demos/fake-auth/fake-auth.component';
import { FormulaireComponent } from './Demos/formulaire/formulaire.component';
import { HttpClientComponent } from './Demos/http-client/http-client.component';
import { ParentComponent } from './Demos/inputOuput/parent/parent.component';
import { ObservablesComponent } from './Demos/observables/observables.component';
import { DemosPipesComponent } from './Demos/Pipes/demos-pipes/demos-pipes.component';
import { RouterComponent } from './Demos/router/router/router.component';
import { SnapshotParamsComponent } from './Demos/router/snapshot-params/snapshot-params.component';

const routes: Routes = [
  {path : 'home', component : AppComponent},
  {path : 'bindingOneWay', component : BindingOneWayComponent},
  {path : 'bindingTwoWay', component : BindingTwoWayComponent},
  {path : 'eventBinding', component : EventBindingComponent},
  {path : 'attributeBinding', component : AttributeBindingComponent},
  {path : 'pipes', component : DemosPipesComponent},
  {path : 'directives', component : DirectivesComponent},
  {path : 'inputOutput', component : ParentComponent},
  {path : 'demoService', component : DemoServiceComponent},
  {path : 'formulaire', component : FormulaireComponent},
  {path : 'router', component : RouterComponent},
  {path : 'snapshot/:idUtilisateur', component : SnapshotParamsComponent},
  {path : 'fakeAuth', component : FakeAuthComponent},
  {path : 'observables', component : ObservablesComponent},
  {path : 'httpClient', component : HttpClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
