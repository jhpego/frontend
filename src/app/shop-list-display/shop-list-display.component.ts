import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShopGroups } from '../models/shop-display.model';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../services/shop-list.service';

@Component({
  selector: 'app-shop-list-display',
  templateUrl: './shop-list-display.component.html',
  styleUrls: ['./shop-list-display.component.scss'],
})
export class ShopListDisplayComponent implements OnInit {
  showAquired: boolean = true;
  onItemPurchased$: BehaviorSubject<ShopItem>;
  @Input() shoppingList: ShopGroups;

  constructor(shopListService: ShopListService) {
    this.onItemPurchased$ = shopListService.onItemPurchased$;
  }

  ngOnInit(): void {}

  toggleShowAquired() {
    this.showAquired = !this.showAquired;
  }

  updatePurchased(shopitem: ShopItem) {
    this.moveShopItem(shopitem);
    this.onItemPurchased$.next(shopitem);
  }

  moveShopItem(shopItem: ShopItem) {
    const shopGroups = this.shoppingList;
    if (shopItem) {
      const targetGroup = shopItem.purchased ? 'aquired' : 'sugested';
      const sourceGroup = !shopItem.purchased ? 'aquired' : 'sugested';

      const sourceCategory = shopGroups[sourceGroup].find(
        (cat) => cat.categoryId == shopItem.category
      );
      sourceCategory.items = sourceCategory.items.filter(
        (item) => item.id !== shopItem.id
      );

      let targetCategory = shopGroups[targetGroup].find(
        (cat) => cat.categoryId == shopItem.category
      );
      if (!targetCategory) {
        targetCategory = {
          categoryId: shopItem.category,
          categoryName: shopItem.category.toString(),
          items: [],
        };
        shopGroups[targetGroup].push(targetCategory);
      }
      targetCategory.items.push(shopItem);
    }
    return shopGroups;
  }
}
