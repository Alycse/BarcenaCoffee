import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule,
    RouterModule.forRoot([
      { path: 'order', loadChildren: "./order/order.module#OrderModule" },
      { path: 'history', loadChildren: "./history/history.module#HistoryModule" },
      { path: 'pantries', loadChildren: "./pantries/pantries.module#PantriesModule" },
      { path: '404', component : NotFoundComponent},
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: 'home', redirectTo: 'order', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ])
  ],
  providers: [
    EnvironmentUrlService,
    RepositoryService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }