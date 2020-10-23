import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-or-remove',
  templateUrl: './add-or-remove.component.html',
  styleUrls: ['./add-or-remove.component.css']
})
export class AddOrRemoveComponent implements OnInit {
  @Output() addProduct = new EventEmitter();
  @Output() removeBtn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addProd(){
    this.addProduct.emit();
  }
  showRemoveBtn(){
    alert('add remove');
    this.removeBtn.emit();
  }
}
