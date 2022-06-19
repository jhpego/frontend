import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { MatCardModule } from '@angular/material/card';
import { Cent2EurPipe } from './services/app.pipes';
import { ShopTotalsComponent } from './shop-totals/shop-totals.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ShopItemDetailComponent } from './shop-item-detail/shop-item-detail.component';
import { MatListModule } from '@angular/material/list';
import { AppNavigatorComponent } from './app-navigator/app-navigator.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ShopListComponent,
    ShopItemComponent,
    Cent2EurPipe,
    ShopTotalsComponent,
    BottomMenuComponent,
    ShopItemDetailComponent,
    AppNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
