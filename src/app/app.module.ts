import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterLinkRendererComponent } from './router-link-renderer/router-link-renderer.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([RouterLinkRendererComponent]),
    RouterModule.forRoot([]),
  ],
  declarations: [AppComponent, RouterLinkRendererComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
