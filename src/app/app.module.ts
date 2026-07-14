import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalErrorHandlerService } from '@services/global-error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
