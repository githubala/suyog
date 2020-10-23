import { Component, OnInit, NgModule, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddProductModalComponent implements OnInit {
  imgPath: string;
  prodname:string;
  art1: string;
  art2: string;
  art3: string;
  pieces: string;
  location: string;
  deliveryTime: string;
  ratings: string;
  price: number;

   obj = {
    productName: "",
    attributes: {
      Material: "",
      Color: "",
      Brand: ""
    },
    image: "",
    minOrders: "",
    deliveryTime: "",
    location: "",
    productRating: "",
    productPrice: 0
  }

  @Output() addprod = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  getFormdata(){    
    
    this.obj.productName = this.prodname;
    this.obj.attributes.Material = this.art1;
    this.obj.attributes.Brand = this.art2;
    this.obj.attributes.Color = this.art3;
    this.obj.deliveryTime = this.deliveryTime;
    this.obj.image = this.imgPath;
    this.obj.location = this.location;
    this.obj.minOrders = this.pieces;
    this.obj.productRating = this.ratings;
    this.obj.productPrice = this.price;

    console.log(this.obj);

    this.addprod.emit(this.obj);
  }
  close(){
    this.closeModal.emit();
  }

}
