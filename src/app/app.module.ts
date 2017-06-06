import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { ReportetsComponent } from './reportets/reportets.component';
import { HomeComponent } from './home/home.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    ReportetsComponent,
    HomeComponent,
    TopRatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'news', component: NewsComponent},
      { path: 'reporters', component: ReportetsComponent},
      { path: '', component: HomeComponent},
      { path: 'topRated', component: TopRatedComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

