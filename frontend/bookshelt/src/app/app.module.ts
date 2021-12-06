import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BookSearchComponent } from './book-search/book-search.component';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {FocusTrapModule} from 'primeng/focustrap';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ChipsModule} from 'primeng/chips';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BookSearchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    AccordionModule,
    FocusTrapModule,
    KeyFilterModule,
    ChipsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }