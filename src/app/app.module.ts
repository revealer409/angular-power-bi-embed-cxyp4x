import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NeoPowerBIModule } from './components/neo-power-bi/neo-power-bi.module';

@NgModule({
  imports: [BrowserModule, FormsModule, NeoPowerBIModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
