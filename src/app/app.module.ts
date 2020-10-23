import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddOrRemoveComponent } from './add-or-remove/add-or-remove.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddOrRemoveComponent,
    AddProductModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
