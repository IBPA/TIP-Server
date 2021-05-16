import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/pages/home/home.component';
import { SearchComponent } from './features/pages/search/search.component';
import {
  TableChemicalComponent,
  TableAssayComponent
} from './features/pages/search';
import { UploadComponent } from './features/pages/upload/upload.component';
import { LoginComponent } from './features/pages/login/login.component';
import { SignupComponent } from './features/pages/signup/signup.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: TableChemicalComponent },
  { path: 'search/chemical', component: TableChemicalComponent },
  { path: 'search/assay', component: TableAssayComponent },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    UploadComponent,
    LoginComponent,
    SignupComponent,
    TableChemicalComponent,
    TableAssayComponent,
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
