import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { FormsModule } from '@angular/forms';
import { BaseChildComponent } from './components/base-child/base-child.component'

import { MyseriveService } from './services/myserive.service';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MoreComponent } from './components/more/more.component';
import { InlineComponent } from './components/inline/inline.component';
import { NotestComponent } from './components/notest/notest.component';
import { TelComponent } from './components/tel/tel.component';
import { SymbolComponent } from './components/symbol/symbol.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BordercolorDirective } from './directives/bordercolor.directive';
import { InputcolorDirective } from './directives/inputcolor.directive';
import { DirectComponent } from './components/direct/direct.component';
import { PMoreComponent } from './components/p-more/p-more.component';
import { ForwardComponent } from './components/forward/forward.component';
import { CustomComponent } from './components/custom/custom.component';
import { ConstructComponent } from './components/construct/construct.component';
import { StructureDirective } from './directives/structure.directive';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    BaseChildComponent,
    BootstrapComponent,
    MoreComponent,
    InlineComponent,
    NotestComponent,
    TelComponent,
    SymbolComponent,
    HighlightDirective,
    BordercolorDirective,
    InputcolorDirective,
    DirectComponent,
    PMoreComponent,
    ForwardComponent,
    CustomComponent,
    ConstructComponent,
    StructureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [MyseriveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
