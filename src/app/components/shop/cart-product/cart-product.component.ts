import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-product',
  template: `
   <div *ngIf="product">
     <div>{{product.name}}</div>
     <div>Price: {{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}}</div>

    <button (click)="removeProduct(product)">X</button>
    
   </div>
  `,
  styles: [`
  :host > div{
    display: grid;
    grid-template-columns: 1fr 25px;
    grid-column-gap: 10px;
    border: 1px solid blue;
    padding: 10px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class CartProductComponent {

  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  removeProduct(product: any) {
      this.productRemoved.emit(product)
  }

}
