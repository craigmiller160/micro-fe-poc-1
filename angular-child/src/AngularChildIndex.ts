import 'zone.js';
import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
