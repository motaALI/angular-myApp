import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';


// custom modules
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
 

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '', redirectTo: 'passengers', pathMatch: 'full' }, implement redirect
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent // wilcard routes for 404 handling
  ],
  imports: [

    // angular modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // custom modules
    PassengerDashboardModule,

    // Rout
    RouterModule.forRoot(routes),
     // RouterModule.forRoot(routes, { useHash: true}), Hash location strategy
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
