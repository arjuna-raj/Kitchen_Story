import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
  <div>{{product.name}}</div><button (click)="addProductToCart(product)">+</button>
  <div><b>Category: </b> {{product.cat}}</div>
  <div>Price: {{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}}</div>
  `,
  styles: [`
  :host {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 10px;
    border: 5px solid red;
    padding: 15px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class ProductComponent {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
}
