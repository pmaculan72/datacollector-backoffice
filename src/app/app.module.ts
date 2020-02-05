import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AppService } from './providers/app.service';
import { LayoutModule } from './views/layout/layout.module';
import { ThemeSettingsModule } from '../vendor/libs/theme-settings/theme-settings.module';

// *******************************************************************************
// Pages

import { HomeComponent } from './views/home/home.component';
import { CompanyModule } from './views/company/company.module';
import { UserModule } from './views/users/user.module';

// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    // Pages
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    CompanyModule,
    UserModule,
    NgbModule,

    // App
    AppRoutingModule,
    LayoutModule,
    ThemeSettingsModule
  ],

  providers: [
    Title,
    AppService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}