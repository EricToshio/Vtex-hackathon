import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numbers: any;
  numbers2: any;
  constructor(public favoritesData: FavoritesService) {
    this.numbers = Array(20).fill(4);
    this.numbers2 = Array(4).fill(4);
  }
}
