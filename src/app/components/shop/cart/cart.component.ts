import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-comp',
  template: `
  <h1>Shopping Cart</h1>
  <cart-product *ngFor="let product of products" [product]="product" (productRemoved)="removeProduct($event)"><cart-product>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class CartComponent {

  @Input() products!: any[];
  @Output() productRemoved = new EventEmitter();

  removeProduct(product: any) {
    this.productRemoved.emit(product);
  }
}
