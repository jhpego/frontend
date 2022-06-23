import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../services/shop-list.service';

@Component({
  selector: 'app-shop-totals',
  templateUrl: './shop-totals.component.html',
  styleUrls: ['./shop-totals.component.scss'],
})
export class ShopTotalsComponent implements OnInit {
  total: number = 0;
  purchased: number = 0;
  displayRemaining: boolean = false;
  onItemPurchased$: Observable<ShopItem>;
  // @Input('obsPurchased') onPurchased$: Observable<ShopItem>;

  constructor(shopListService: ShopListService) {
    this.onItemPurchased$ = shopListService.onItemPurchased$;
  }

  ngOnInit(): void {
    this.onItemPurchased$
      .pipe(filter((data) => data != null))
      .subscribe((shopItem) => {
        let price = shopItem.price;
        if (shopItem.purchased != null) {
          price = shopItem.purchased ? shopItem.price : -shopItem.price;
          this.purchased += price;
        } else {
          this.total += price;
        }
      });
  }

  toggleDisplay() {
    this.displayRemaining = !this.displayRemaining;
  }

  getProgressValue() {
    return (this.purchased / this.total) * 100;
  }
}
