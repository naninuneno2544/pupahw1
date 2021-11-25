import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = BOOKS;
  selectedBook?: Book;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Book): void {
    this.selectedBook = hero;
  }

}
