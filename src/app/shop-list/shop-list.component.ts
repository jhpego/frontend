import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subject, tap } from 'rxjs';
import { ShopGroup } from '../models/shop-display.model';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../services/shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  constructor(private shopListService: ShopListService) {}

  filterJustUnpurchased: boolean = false;
  onPurchased$: Subject<ShopItem> = new Subject<ShopItem>();
  shoppingList$: Observable<ShopGroup[]> = this.shopListService
    .getShopItems()
    .pipe(
      map((shoplist: ShopItem[]) => {
        const groupByCategory: { [key: string]: ShopItem[] } = shoplist.reduce(
          (group: { [key: string]: ShopItem[] }, item: ShopItem) => {
            const { category } = item;
            group[category] = group[category] ?? [];
            group[category].push(item);
            return group;
          },
          {}
        );

        const shopGroups: ShopGroup[] = Object.keys(groupByCategory).map(
          (key) => {
            return {
              categoryId: parseInt(key),
              categoryName: key,
              items: groupByCategory[key],
            };
          }
        );
        debugger;
        return shopGroups;

        // shoplist.forEach((currItem) => {
        //   let shopItemClone = { ...currItem };
        //   shopItemClone.purchased = null;
        //   this.onPurchased$.next(shopItemClone);
        // });
      })
      // tap(
      // })
    );

  ngOnInit(): void {}

  updatePurchased(shopitem: ShopItem) {
    this.onPurchased$.next(shopitem);
  }

  filterShopItems(shopItems: ShopGroup[]) {
    return shopItems;
    // if (shopItems == null) return [];
    // const filtered = shopItems.filter(
    //   (currItem) =>
    //     !this.filterJustUnpurchased ||
    //     (this.filterJustUnpurchased && !currItem.purchased)
    // );
    // return filtered;
  }
}
