import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {ChartComponent} from "./chart/chart.component";

const routes: Routes = [


    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'product', component: CreateProductComponent },
    { path: 'products', component: ProductListComponent},
    {path: 'chart',component: ChartComponent},
    { path: 'details/:id', component: ProductDetailsComponent },
    {path: 'update/:id',component: UpdateProductComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
