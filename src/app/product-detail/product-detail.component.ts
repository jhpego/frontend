import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopListService } from '../services/shop-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private shoplistService: ShopListService) {}

  onSubmit(form, evt) {
    console.log(form, evt);
    const product = form.value;
    this.shoplistService.addProduct(product).subscribe((res) => {
      console.warn('product added:', res);
    });
  }

  ngOnInit(): void {}
}
