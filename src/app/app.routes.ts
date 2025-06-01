import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent}
];
