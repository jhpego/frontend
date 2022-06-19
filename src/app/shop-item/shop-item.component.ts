import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShopItem } from '../models/shop-item.model';
import { ShopItemDetailComponent } from '../shop-item-detail/shop-item-detail.component';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  @Input() shopItem: ShopItem;
  @Output() purchase: EventEmitter<ShopItem> = new EventEmitter();

  ngOnInit(): void {}

  togglePurchase() {
    this.shopItem.purchased = !this.shopItem.purchased;
    this.purchase.emit(this.shopItem);
  }

  editShopItem(evt: MouseEvent) {
    evt.stopPropagation();
    console.log('shopItem', this.shopItem);
    this._bottomSheet.open(ShopItemDetailComponent);
  }
}
