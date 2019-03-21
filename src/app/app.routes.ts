import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SomosComponent } from './components/somos/somos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductsComponent } from './components/products/products.component';
import { InteriorComponent } from './components/categories/interior/interior.component';
import { ProductComponent } from './components/product/product.component';
import { ExteriorComponent } from './components/categories/exterior/exterior.component';
import { ProductInteriorComponent } from './components/product-interior/product-interior.component';
import { CactusComponent } from './components/categories/cactus/cactus.component';
import { ProductCactusComponent } from './components/product-cactus/product-cactus.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'somos', component: SomosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'interior', component: InteriorComponent },
  { path: 'exterior', component: ExteriorComponent },
  { path: 'cactus', component: CactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'productInterior/:id', component: ProductInteriorComponent },
  { path: 'productCactus/:id', component: ProductCactusComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
