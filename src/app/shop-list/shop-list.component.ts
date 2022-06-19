import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShopItem } from '../models/shop-item.model';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  constructor(private shopListService: ShopListService) {}

  shoppingList$: Observable<ShopItem[]> = this.shopListService.getShopItems();

  ngOnInit(): void {}
}
