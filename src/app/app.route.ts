import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './providers/auth.guard';
import { PublishedComponent } from './published/published.component';
import { SelledComponent } from './selled/selled.component';
import { PostComponent } from './post/post.component';
import { SeachComponent } from './seach/seach.component';
import { DetailProComponent } from './detail-pro/detail-pro.component';
import { InfoUserComponent } from './info-user/info-user.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'product',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'ads',
        component: SellComponent
      },
    ]
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'post',
        component: PostComponent
      },
    ]
  }, 
  {
    path: 'product',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'search',
        component: SeachComponent
      },
    ]
  },
  
  {
    path: 'user',
    component: AuthenticatedComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'product',
    component: SellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'published/:idUser', component: PublishedComponent },
      { path: 'selled/:idUser', component: SelledComponent },
    ],
  },
  {
    path: 'product',
    component: SellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'published/:idUser/:idProduct', component: DetailProComponent },
    
    ],
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      { path: 'info', component: InfoUserComponent },
    
    ],
  },
  { path: '**', component: NotFoundComponent },

];
