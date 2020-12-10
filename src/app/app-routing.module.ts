import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './components/base/base.component';

import { BaseChildComponent } from './components/base-child/base-child.component'

const routes: Routes = [
  {
    path: 'base', component: BaseComponent
  }, {
    path: 'basechild', component: BaseChildComponent
  }, {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
