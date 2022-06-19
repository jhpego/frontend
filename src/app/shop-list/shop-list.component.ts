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
    },
    {
      id: '2',
      name: 'coentros',
      purchased: false,
    },
    {
      id: '3',
      name: 'shampoo',
      purchased: false,
    },
    {
      id: '4',
      name: 'carne',
      purchased: false,
    },
  ]);

  ngOnInit(): void {}

  togglePurchase(item: ShopItem) {
    item.purchased = !item.purchased;
  }
}
