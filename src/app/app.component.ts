import { Component, HostListener } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { MyHammerConfig } from './app.module';
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

    // const hammerConfig = new MyHammerConfig();
    // //or if you use another class as provider:
    // //    const hammerConfig=new MyHammerConfig()
    // const hammer = hammerConfig.buildHammer(document.documentElement);
    // hammer.on('swipe', () => console.warn('swipped'));

    // // const hammer = hammerConfig.buildHammer(document.documentElement);
    // // fromEvent(hammer, 'swipe')
    // //   .pipe
    // //   // takeWhile(()=>this.alive))
    // //   ()
    // //   .subscribe((res: any) => {
    // //     console.log(res.deltaX);
    // //   });
  }

  onSwipe(event) {
    let direction = '';
    console.log('swipe', event);
    const x =
      Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';
    const y =
      Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';
    direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
    console.warn(direction);
    // if (x == 'Right') {

    //   if (this.currScreen == this.screenPages.length - 1) {
    //     this.currScreen = 0;
    //   } else {
    //     this.currScreen++;
    //   }
    // } else if (x == 'Left') {
    //   if (this.currScreen == 0) {
    //     this.currScreen = this.screenPages.length - 1;
    //   } else {
    //     this.currScreen--;
    //   }
    // }
  }

  @HostListener('swipe', ['$event'])
  handleTouch(ev) {
    console.warn('swipe listened');
  }
}
