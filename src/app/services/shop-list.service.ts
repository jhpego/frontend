import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShopItem } from '../models/shop-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShopListService {
  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {}

  getShopItems(): Observable<ShopItem[]> {
    const url = environment.url_api + '/api/shop/';
    return this.http.get<ShopItem[]>(url).pipe(
      map((result) => {
        return result.map((currItem) => {
          const safeImg = this.domSanitizer.bypassSecurityTrustResourceUrl(
            `data:image/png;base64,${currItem.image}`
          );

          currItem.price = currItem.price * 100;
          // currItem.image = safeImg;
          currItem.safeImage = safeImg;
          this.onItemPurchased$.next(currItem);
          return currItem;
        });
      })
    );
  }

  onItemPurchased$ = new BehaviorSubject<ShopItem>(null);
}
