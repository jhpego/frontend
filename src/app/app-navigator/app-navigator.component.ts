import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';

@Component({
  selector: 'app-app-navigator',
  templateUrl: './app-navigator.component.html',
  styleUrls: ['./app-navigator.component.scss'],
})
export class AppNavigatorComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomMenu() {
    this._bottomSheet.open(BottomMenuComponent);
  }
}
