import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page: string = '';

  constructor(private router: Router, appService: AppService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log('Navigating: ', val);
        appService.$appSettingsChanged.next({
          page: appService.getRouteIdentifier(val.url),
        });
      }
    });

    appService.$appSettingsChanged.subscribe((appSettings) => {
      if (appSettings) {
        this.page = appSettings.page;
      }
    });
  }
}
