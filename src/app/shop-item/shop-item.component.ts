import { Component, Input, OnInit } from '@angular/core';
import { ShopItem } from '../models/shop-item.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  constructor() {}

  @Input() shopItem: ShopItem;

  ngOnInit(): void {}

  togglePurchase() {
    this.shopItem.purchased = !this.shopItem.purchased;
  }
}
