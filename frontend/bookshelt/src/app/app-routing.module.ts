import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { BookDetailComponent } from './book-detail/book-detail.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BooksComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'home', component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
