import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/pages/home/home.component';
import { SearchComponent } from './features/pages/search/search.component';
import { UploadComponent } from './features/pages/upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upload', component: UploadComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    UploadComponent,
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
