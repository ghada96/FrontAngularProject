import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsampleComponent } from './chartsample/chartsample.component';
import { SaleComponent } from './sale/sale.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    ChartComponent,
    ChartsampleComponent,
    SaleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
