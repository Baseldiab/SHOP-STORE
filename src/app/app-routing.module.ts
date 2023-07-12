import { CartComponent } from './pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FurnitureComponent } from './pages/categories/furniture/furniture.component';
import { GroceriesComponent } from './pages/categories/groceries/groceries.component';
import { ElectronicsComponent } from './pages/categories/electronics/electronics.component';
import { LightingComponent } from './pages/categories/lighting/lighting.component';
import { WatchesComponent } from './pages/categories/watches/watches.component';
import { ShoesComponent } from './pages/categories/shoes/shoes.component';
import { WomenBagsComponent } from './pages/categories/women-bags/women-bags.component';
import { WomenDressesComponent } from './pages/categories/women-dresses/women-dresses.component';
import { MenShirtsComponent } from './pages/categories/men-shirts/men-shirts.component';
import { SunglassesComponent } from './pages/categories/sunglasses/sunglasses.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { WishComponent } from './pages/wish/wish.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { WomensShoesComponent } from './pages/categories/womens-shoes/womens-shoes.component';
import { WomensWatchesComponent } from './pages/categories/womens-watches/womens-watches.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // ==================
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // ==================
  {
    path: 'Product',
    children: [
      { path: '', component: AllProductsComponent },
      { path: ':singleProduct', component: SingleProductComponent },
    ],
  },
  // ==================
  { path: 'cart', component: CartComponent },
  { path: 'wish', component: WishComponent },
  // ==================
  { path: 'furniture', component: FurnitureComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'smartphones', component: ElectronicsComponent },
  { path: 'lighting', component: LightingComponent },
  { path: 'mens-watches', component: WatchesComponent },
  { path: 'womens-watches', component: WomensWatchesComponent },
  { path: 'mens-shoes', component: ShoesComponent },
  { path: 'womens-shoes', component: WomensShoesComponent },
  { path: 'womens-bags', component: WomenBagsComponent },
  { path: 'womens-dresses', component: WomenDressesComponent },
  { path: 'mens-shirts', component: MenShirtsComponent },
  { path: 'sunglasses', component: SunglassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
