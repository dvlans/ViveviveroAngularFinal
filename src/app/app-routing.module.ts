import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


const appRoutes: Routes= [
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },

  {
    path:'profile',
    component:ProfileComponent
  },

  {
    path:'request-password-reset',
    component: RequestResetComponent
  },

  {
    path:'response-password-reset',
    component: ResponseResetComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ]
})
export class AppRoutingModule { }
