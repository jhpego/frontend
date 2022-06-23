import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { ShopItem } from '../models/shop-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShopListService {
  constructor(private http: HttpClient) {}

  getShopItems(): Observable<ShopItem[]> {
    const url = 'https://jhp-nodered.herokuapp.com/api/shop/list';
    return this.http.get<ShopItem[]>(url).pipe(
      map((result) => {
        return result.map((currItem) => {
          currItem.price = currItem.price * 100;
          return currItem;
        });
      })
    );
  }

  onItemPurchased$ = new BehaviorSubject<ShopItem>(null);
}
