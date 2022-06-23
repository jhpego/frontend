import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../models/appSettings.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  $appSettingsChanged: BehaviorSubject<AppSettings> = new BehaviorSubject(null);

  myRoutesIdentifiers: any = {
    '/first-page': 'firstPage',
    '/second-page': 'shoppingList',
  };

  getRouteIdentifier(url: string): string {
    let identifier = '';
    if (url in this.myRoutesIdentifiers) {
      identifier = this.myRoutesIdentifiers[url];
    }
    return identifier;
  }
}
