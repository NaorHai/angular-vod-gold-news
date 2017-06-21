import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { ReporterComponent } from './reporter/reporter.component';
import  { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    TopRatedComponent,
    ReporterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'news', component: NewsComponent},
      { path: 'reporters', component: ReporterComponent},
      { path: 'home', component: HomeComponent},
      { path: 'top', component: TopRatedComponent}
    ])
  ],
  providers: [ApiService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

