import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PricesComponent } from './components/prices/prices.component';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [
    ProductComponent,
    PricesComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
