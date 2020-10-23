import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public products: any[] = [];
  public isModal: boolean;
  public isRemove: boolean;

  constructor(private _Products: ProductService) { }

  ngOnInit(): void {
    this._Products.getJSON().subscribe(response => {
      this.products = response;
      console.log(this.products);
      this.products.forEach(item => {
        console.log(item.productName);
      })
    });

  }
  title = 'suyog';
  removeitem(productName) {
    console.log('remove ' + productName);
    this.products.splice(this.products.findIndex(function (i) {
      return i.productName === productName;
    }), 1);
    console.log('after remove ' + this.products);
  }
  addItem(){
    this.isModal = true;
  }
  addnewprod(newproduct){
    console.log(newproduct);
    this.products.push(newproduct);
    this.isModal = false;
    console.log(this.products+'  bala');
  }
  close(){
    this.isModal = false;
  }
  showRemovebtn(){
    alert('show remove button')
    this.isRemove = true;
  }
}
