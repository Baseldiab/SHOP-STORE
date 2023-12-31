import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import * as $ from 'jquery';
// import

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
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
import { CartComponent } from './pages/cart/cart.component';
import { WishComponent } from './pages/wish/wish.component';
import { AllProductsComponent } from './pages/collections/all-products/all-products.component';
import { WomensShoesComponent } from './pages/collections/womens-shoes/womens-shoes.component';
import { WomensWatchesComponent } from './pages/collections/womens-watches/womens-watches.component';

import { SmartphonesComponent } from './pages/collections/smartphones/smartphones.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { UpdateProductComponent } from './dashboard/update-product/update-product.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { AdminLoginComponent } from './dashboard/admin-login/admin-login.component';
import { NavbarDashboardComponent } from './shared/navbar-dashboard/navbar-dashboard.component';
// import { ImagekitioAngularModule } from 'imagekitio-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    AllProductsComponent,
    WomensShoesComponent,
    WomensWatchesComponent,
    SmartphonesComponent,
    AboutUsComponent,
    ProductsComponent,
    UpdateProductComponent,
    AddProductComponent,
    AdminLoginComponent,
    NavbarDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgxImageZoomModule,
    FormsModule,

    // NgxImageZoomModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
