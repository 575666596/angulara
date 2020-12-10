import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { FormsModule } from '@angular/forms';
import { BaseChildComponent } from './components/base-child/base-child.component'

import { MyseriveService } from './services/myserive.service'

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    BaseChildComponent
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
