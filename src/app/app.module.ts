import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatFormFieldModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';
import { SlideComponent } from './slide/slide.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SellComponent } from './sell/sell.component';
import { appRoutes } from './app.route';
import { AuthGuard } from './providers/auth.guard';
import { AuthService } from './providers/auth.service';
import { PublishedComponent } from './published/published.component';
import { SelledComponent } from './selled/selled.component';
import { SeachComponent } from './seach/seach.component';
import { PostComponent } from './post/post.component';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutConfirmComponent } from './header/logout-confirm';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SlideComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticatedComponent,
    SellComponent,
    PublishedComponent,
    SelledComponent,
    SeachComponent,
    PostComponent,
    LogoutConfirmComponent
  ],

  exports: [RouterModule],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AuthGuard,
    AuthService
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [LogoutConfirmComponent]
})
export class AppModule { }
