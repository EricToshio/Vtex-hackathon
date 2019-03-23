import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  numbers: any;
  numbers2: any;
  products = [];
  constructor() {
    this.numbers = Array(20).fill(4);
    this.numbers2 = Array(4).fill(4);
    this.products = [
    {
    	url: "/assets/armario1.jpg",
    },
    {
    	url: "/assets/armario2.webp",
    },
    {
    	url: "/assets/armario3.jpg",
    },
    {
    	url: "/assets/bone1.jpg",
    },
    {
    	url: "/assets/bone2.webp",
    },
    {
    	url: "/assets/celular1.jpeg",
    },
    {
    	url: "/assets/celular2.jpg",
    },
    {
    	url: "/assets/oculos1.webp",
    },
    {
    	url: "/assets/oculos2.webp",
    },
    {
    	url: "/assets/sofa1.jpg",
    },
    {
    	url: "/assets/sofa2.webp",
    },
    {
    	url: "/assets/sofa3.jpg",
    },
    {
    	url: "/assets/tenis.png",
    },
    {
    	url: "/assets/tenis2.png",
    },
    {
    	url: "/assets/tenis3.png"
    }
    ];
  }
}
