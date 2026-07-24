import { NgModule, ErrorHandler } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalErrorHandlerService } from '@services/global-error-handler.service';
import { FeaturesModule } from '@features/features.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutsModule } from '@features/layouts/layouts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        FeaturesModule,
        LayoutsModule,
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
