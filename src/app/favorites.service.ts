import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  base = [];
  constructor() { }

  add(item) {
  	this.base.push(item);
  }

  getFavorites() {
  	return this.base;
  }
}
