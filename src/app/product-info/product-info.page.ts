import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {

  products = [];
  index: string;
  constructor(private route: ActivatedRoute) {
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
    this.index = this.route.snapshot.paramMap.get('index');
    console.log(this.index);
  }

  ngOnInit() {
  }

}
