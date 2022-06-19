import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShopItem } from '../models/shop-item.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  constructor() {}

  shoppingList$: Observable<ShopItem[]> = of([
    {
      id: '1',
      name: 'arroz',
      purchased: false,
      price: 0.95,
    },
    {
      id: '2',
      name: 'coentros',
      purchased: false,
      price: 0.75,
    },
    {
      id: '3',
      name: 'shampoo',
      purchased: false,
      price: 2.5,
    },
    {
      id: '4',
      name: 'carne',
      purchased: false,
      price: 3,
    },
  ]);

  ngOnInit(): void {}
}
