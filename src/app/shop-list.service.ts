import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShopItem } from './models/shop-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShopListService {
  constructor(private http: HttpClient) {}

  getShopItems(): Observable<ShopItem[]> {
    const url = 'https://jhp-nodered.herokuapp.com/api/shop/list';
    return this.http.get<ShopItem[]>(url);
    // return of([
    //   {
    //     id: '1',
    //     name: 'arroz',
    //     purchased: false,
    //     price: 0.95,
    //   },
    //   {
    //     id: '2',
    //     name: 'coentros',
    //     purchased: false,
    //     price: 0.75,
    //   },
    //   {
    //     id: '3',
    //     name: 'shampoo',
    //     purchased: false,
    //     price: 2.5,
    //   },
    //   {
    //     id: '4',
    //     name: 'carne',
    //     purchased: false,
    //     price: 3,
    //   },
    // ]);
  }
}
