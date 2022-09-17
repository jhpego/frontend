import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent {
  searchProduct: string;
  constructor(public dialog: MatDialog) {}

  addProduct() {
    this.dialog.open(ProductDetailComponent, {
      width: '250px',
    });
  }
}
