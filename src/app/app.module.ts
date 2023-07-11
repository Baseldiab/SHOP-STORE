import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
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
import { CartComponent } from './pages/cart/cart.component';
import { WishComponent } from './pages/wish/wish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    FurnitureComponent,
    GroceriesComponent,
    ElectronicsComponent,
    LightingComponent,
    WatchesComponent,
    ShoesComponent,

    WomenBagsComponent,
    WomenDressesComponent,
    MenShirtsComponent,
    SunglassesComponent,
    SingleProductComponent,
    CartComponent,
    WishComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
