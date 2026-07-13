import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
