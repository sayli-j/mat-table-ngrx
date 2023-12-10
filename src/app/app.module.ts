import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomerService } from './services/customer.service';
import { MaterialModule } from './shared/material.module';
@NgModule({
  declarations: [AppComponent, CustomerTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingButtonsModule,
    NgxSpinnerModule,
    MaterialModule,
  ],
  providers: [
    CustomerService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
