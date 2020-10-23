import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//import { ProductService } from "../../services/product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {  
  //attributes: [];
@Input() productData: any;
@Output() removeitem = new EventEmitter();
//toRemove: boolean;


  constructor() {}

  ngOnInit(): void {
    //this.toRemove = false
    console.log(this.productData);
    //attributes = Object.values(this.productData);
    // for (let key of Object.keys(this.productData.attributes)) {
    //   console.log(key); // John, then 30
    //   this.attributes =+ key;
    //   console.log(this.attributes);
    // }
//console.log(this.attributes);
  }
  remove(productName){
    console.log('child remove '+productName)
    this.removeitem.emit(productName);
  }

}
