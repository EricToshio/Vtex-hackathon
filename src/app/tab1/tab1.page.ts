import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
	
	numbers: any;
	numbers2: any;
	constructor() {
		this.numbers = Array(20).fill(4);
		this.numbers2 = Array(4).fill(4);
	}
}
