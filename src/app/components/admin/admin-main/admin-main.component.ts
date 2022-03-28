import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  productList = [
    { name: 'Chicken', price: 12, cat: 'Meat' },
    { name: 'Pork', price: 8, cat: 'Meat' },
    { name: 'Beef', price: 16, cat: 'Meat' },
    { name: 'Broccoli', price: 4, cat: 'Veg' },
    { name: 'Potato', price: 5, cat: 'Veg' },
    { name: 'Lettuce', price: 4, cat: 'Veg' },
    { name: 'Cheddar', price: 5, cat: 'Dairy' },
    { name: 'Whole Milk', price: 4, cat: 'Dairy' },
    { name: 'Fat Free Milk', price: 4, cat: 'Dairy' },
    { name: 'Spoon', price: 12, cat: 'Utensil' },
    { name: 'Fork', price: 12, cat: 'Utensil' },
    { name: 'Knife', price: 12, cat: 'Utensil' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
