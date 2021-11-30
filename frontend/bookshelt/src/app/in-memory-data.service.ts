import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 11, name: 'Dr Nice', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 12, name: 'Narco', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 13, name: 'Bombasto', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 14, name: 'Celeritas', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 15, name: 'Magneta', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 16, name: 'RubberMan', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 17, name: 'Dynama', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 18, name: 'Dr IQ', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 19, name: 'Magma', price: '210', author: 'Dang', page: '211', immage: '555'},
      { id: 20, name: 'Tornado', price: '210', author: 'Dang', page: '211', immage: '555'}
    ];
    return { books };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
