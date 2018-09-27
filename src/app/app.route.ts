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

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: '',
  //   // canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'ads',
  //       component: SellComponent
  //     },
  //   ]
  // },
  {
    path: '',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'post',
        component: PostComponent
      },
    ]
  }, {
    path: '',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'search',
        component: SeachComponent
      },
    ]
  },
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: SellComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'published', component: PublishedComponent },
      { path: 'selled', component: SelledComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },

];
