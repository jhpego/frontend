import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  of,
  Subject,
  tap,
  BehaviorSubject,
} from 'rxjs';
import { ShopCategory, ShopGroups } from '../models/shop-display.model';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../services/shop-list.service';
import { ShopItemComponent } from '../shop-item/shop-item.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  constructor(private shopListService: ShopListService) {}

  shoppingList$: Observable<ShopGroups> = this.getShopItemsGrouped();
  // shoppingList$: Observable<ShopGroups> = combineLatest([
  //   this.getShopItemsGrouped(),
  //   this.onPurchased$,
  // ]).pipe(
  //   tap((values) => {
  //     console.log('combined', values);
  //   }),
  //   map(([shopGroups, shopItem]) => {
  //     if (shopItem) {
  //       const targetGroup = shopItem.purchased ? 'aquired' : 'sugested';
  //       const sourceGroup = !shopItem.purchased ? 'aquired' : 'sugested';

  //       const sourceCategory = shopGroups[sourceGroup].find(
  //         (cat) => cat.categoryId == shopItem.category
  //       );
  //       sourceCategory.items = sourceCategory.items.filter(
  //         (item) => item.id !== shopItem.id
  //       );

  //       let targetCategory = shopGroups[targetGroup].find(
  //         (cat) => cat.categoryId == shopItem.category
  //       );
  //       if (!targetCategory) {
  //         targetCategory = {
  //           categoryId: shopItem.category,
  //           categoryName: shopItem.category.toString(),
  //           items: [],
  //         };
  //         shopGroups[targetGroup].push(targetCategory);
  //       }
  //       targetCategory.items.push(shopItem);
  //     }
  //     return shopGroups;
  //   })
  // );

  ngOnInit(): void {}

  // updatePurchased(shopitem: ShopItem) {
  //   this.onPurchased$.next(shopitem);
  // }

  filterShopItems(shopItems: ShopCategory[]) {
    return shopItems;
    // if (shopItems == null) return [];
    // const filtered = shopItems.filter(
    //   (currItem) =>
    //     !this.filterJustUnpurchased ||
    //     (this.filterJustUnpurchased && !currItem.purchased)
    // );
    // return filtered;
  }

  getShopItemsGrouped(): Observable<ShopGroups> {
    return this.shopListService.getShopItems().pipe(
      map((shoplist: ShopItem[]): ShopGroups => {
        const groupByCategory: { [key: string]: ShopItem[] } = shoplist.reduce(
          (group: { [key: string]: ShopItem[] }, item: ShopItem) => {
            const { category } = item;
            group[category] = group[category] ?? [];
            group[category].push(item);
            return group;
          },
          {}
        );

        const shopCategories: ShopCategory[] = Object.keys(groupByCategory).map(
          (key) => {
            return {
              categoryId: parseInt(key),
              categoryName: key,
              items: groupByCategory[key],
            };
          }
        );
        return {
          sugested: shopCategories,
          aquired: [],
        };
      })
    );
  }
}
