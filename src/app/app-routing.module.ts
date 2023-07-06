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
import { MenBagsComponent } from './pages/categories/men-bags/men-bags.component';
import { WomenBagsComponent } from './pages/categories/women-bags/women-bags.component';
import { WomenDressesComponent } from './pages/categories/women-dresses/women-dresses.component';
import { MenShirtsComponent } from './pages/categories/men-shirts/men-shirts.component';
import { SunglassesComponent } from './pages/categories/sunglasses/sunglasses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // ==================
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // ==================
  { path: 'furniture', component: FurnitureComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'lighting', component: LightingComponent },
  { path: 'watches', component: WatchesComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'men-bags', component: MenBagsComponent },
  { path: 'women-bags', component: WomenBagsComponent },
  { path: 'women-dresses', component: WomenDressesComponent },
  { path: 'men-shirts', component: MenShirtsComponent },
  { path: 'sunglasses', component: SunglassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
