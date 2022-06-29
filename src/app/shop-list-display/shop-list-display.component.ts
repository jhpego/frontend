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
  @Input() searchProduct: string = '';

  screenPages: string[] = ['Sugested', 'Aquired'];
  currScreen: number = 0;

  constructor(shopListService: ShopListService) {
    this.onItemPurchased$ = shopListService.onItemPurchased$;
  }

  ngOnInit(): void {
    this.currScreen = 0;
  }

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

  onSwipe(event) {
    let direction = '';
    console.log('swipe', event);
    const x =
      Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';
    const y =
      Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';
    direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
    // console.warn(direction);
    if (x == 'Right') {
      if (this.currScreen == this.screenPages.length - 1) {
        this.currScreen = 0;
      } else {
        this.currScreen++;
      }
    } else if (x == 'Left') {
      if (this.currScreen == 0) {
        this.currScreen = this.screenPages.length - 1;
      } else {
        this.currScreen--;
      }
    }
  }

  filterItems(shopItems: ShopItem[]) {
    if (this.searchProduct == '' || !this.searchProduct) {
      return shopItems;
    }
    return shopItems.filter((currItem) =>
      currItem.name.includes(this.searchProduct)
    );
  }
}
