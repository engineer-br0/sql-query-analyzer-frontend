import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { App } from './app';
import { AnalyzerComponent } from './components/analyzer/analyzer';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  
imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule
],
  providers: [],
  bootstrap: []
})
export class AppModule { }