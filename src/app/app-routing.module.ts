import { CartComponent } from './pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FurnitureComponent } from './pages/collections/furniture/furniture.component';
import { GroceriesComponent } from './pages/collections/groceries/groceries.component';
import { ElectronicsComponent } from './pages/collections/electronics/electronics.component';
import { LightingComponent } from './pages/collections/lighting/lighting.component';
import { WatchesComponent } from './pages/collections/watches/watches.component';
import { ShoesComponent } from './pages/collections/shoes/shoes.component';
import { WomenBagsComponent } from './pages/collections/women-bags/women-bags.component';
import { WomenDressesComponent } from './pages/collections/women-dresses/women-dresses.component';
import { MenShirtsComponent } from './pages/collections/men-shirts/men-shirts.component';
import { SunglassesComponent } from './pages/collections/sunglasses/sunglasses.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { WishComponent } from './pages/wish/wish.component';
import { AllProductsComponent } from './pages/collections/all-products/all-products.component';
import { WomensShoesComponent } from './pages/collections/womens-shoes/womens-shoes.component';
import { WomensWatchesComponent } from './pages/collections/womens-watches/womens-watches.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // ==================
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // ==================
  { path: 'cart', component: CartComponent },
  { path: 'wish', component: WishComponent },
  // ==================
  {
    path: 'Product',
    children: [{ path: ':singleProduct', component: SingleProductComponent }],
    // ==================
  },
  {
    path: 'collection',
    children: [
      { path: 'all', component: AllProductsComponent },
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
