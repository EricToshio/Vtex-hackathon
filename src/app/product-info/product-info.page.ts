import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FavoritesService } from '../favorites.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {

  products = [];
  index: string;
  isFavorite = false;
  constructor(private route: ActivatedRoute, 
    public favoritesData: FavoritesService,
    public toastC: ToastController) {
    this.products = [
    {
      name: "Guarda roupas",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/armario1.jpg",
    },
    {
      name: "Guarda roupas",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/armario2.webp",
    },
    { 
      name: "Guarda roupas",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/armario3.jpg",
    },
    { 
      name: "Boné",
      hasDiscount: false,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/bone1.jpg",
    },
    { 
      name: "Boné",
      hasDiscount: false,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/bone2.webp",
    },
    { 
      name: "Celular",
      hasDiscount: false,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/celular1.jpeg",
    },
    { 
      name: "Celular",
      hasDiscount: true,
      discount: 25,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/celular2.jpg",
    },
    { 
      name: "Óculos",
      hasDiscount: true,
      discount: 5,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/oculos1.webp",
    },
    { 
      name: "Óculos",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/oculos2.webp",
    },
    { 
      name: "Sofá",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/sofa1.jpg",
    },
    { 
      name: "Sofá",
      hasDiscount: true,
      discount: 60,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/sofa2.webp",
    },
    { 
      name: "Sofá",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/sofa3.jpg",
    },
    { 
      name: "Tênis",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/tenis.png",
    },
    { 
      name: "Tênis",
      hasDiscount: true,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/tenis2.png",
    },
    { 
      name: "Tênis",
      hasDiscount: false,
      discount: 15,
      price: 200,
      storeUrl: "/assets/chillibeans.jpg",
      aditionalInfo: "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.",
      url: "/assets/tenis3.png"
    }
    ];
    this.index = this.route.snapshot.paramMap.get('index');
  }

  ngOnInit() {
  }

  addFavorite(item) {
    this.favoritesData.add(this.products[item]);
    this.presentToast();
    this.isFavorite = true;
  }

  async presentToast() {
    const toast = await this.toastC.create({
      message: 'Produto adicionado aos favoritos!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
