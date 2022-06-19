import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, tap } from 'rxjs';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../services/shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  constructor(private shopListService: ShopListService) {}

  onPurchased$: Subject<ShopItem> = new Subject<ShopItem>();
  shoppingList$: Observable<ShopItem[]> = this.shopListService
    .getShopItems()
    .pipe(
      tap((shoplist) => {
        shoplist.forEach((currItem) => {
          let shopItemClone = { ...currItem };
          shopItemClone.purchased = null;
          this.onPurchased$.next(shopItemClone);
        });
      })
    );

  ngOnInit(): void {}

  updatePurchased(shopitem: ShopItem) {
    this.onPurchased$.next(shopitem);
  }
}
