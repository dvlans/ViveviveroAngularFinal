import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProductsServices } from './services/products.service';
import { InteriorServices } from './services/interior.service';
import { CactusServices } from './services/cactus.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SomosComponent } from './components/somos/somos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ExteriorComponent } from './components/categories/exterior/exterior.component';
import { InteriorComponent } from './components/categories/interior/interior.component';
import { ProductInteriorComponent } from './components/product-interior/product-interior.component';
import { CactusComponent } from './components/categories/cactus/cactus.component';
import { ProductCactusComponent } from './components/product-cactus/product-cactus.component';
import { DatosClienteComponent } from './components/datos-cliente/datos-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SomosComponent,
    TiendaComponent,
    ProyectosComponent,
    ContactoComponent,
    ProductsComponent,
    ProductComponent,
    ExteriorComponent,
    InteriorComponent,
    ProductInteriorComponent,
    CactusComponent,
    ProductCactusComponent,
    DatosClienteComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProductsServices,
    InteriorServices,
    CactusServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
