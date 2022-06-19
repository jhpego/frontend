import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../services/shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  constructor(private shopListService: ShopListService) {}

  shopTotal: number = 0;
  shopPurchased: number = 0;

  shoppingList$: Observable<ShopItem[]> = this.shopListService
    .getShopItems()
    .pipe(
      tap((shoplist) => {
        shoplist.forEach((currItem) => {
          if (currItem.purchased) {
            this.shopPurchased += currItem.price;
          }
          this.shopTotal += currItem.price;
        });
      })
    );

  ngOnInit(): void {}

  updatePurchased(shopitem: ShopItem) {
    if (shopitem.purchased) {
      this.shopPurchased += shopitem.price;
    } else {
      this.shopPurchased -= shopitem.price;
    }
  }
}
