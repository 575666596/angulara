import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './components/base/base.component';

import { BaseChildComponent } from './components/base-child/base-child.component'
import { MoreComponent } from './components/more/more.component';
import { TelComponent } from './components/tel/tel.component';
import { SymbolComponent } from './components/symbol/symbol.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { PMoreComponent } from './components/p-more/p-more.component'
import { ForwardComponent } from './components/forward/forward.component'
import { CustomComponent } from './components/custom/custom.component'
import { DirectComponent } from './components/direct/direct.component';
import { ConstructComponent } from './components/construct/construct.component';




const routes: Routes = [
  {
    path: 'base', component: BaseComponent
  }, {
    path: 'basechild', component: BaseChildComponent
  }, {
    path: 'more', component: MoreComponent
  }, {
    path: 'symbol', component: SymbolComponent
  }, {
    path: 'tel', component: TelComponent
  }, {
    path: 'bootstrap', component: BootstrapComponent
  }, {
    path: 'pmore', component: PMoreComponent
  }, {
    path: 'forward', component: ForwardComponent
  }, {
    path: 'custom', component: CustomComponent
  }, {
    path: 'direct', component: DirectComponent
  }, {
    path: 'construct', component: ConstructComponent
  }, {
    path: '', redirectTo: '', pathMatch: 'full'
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
