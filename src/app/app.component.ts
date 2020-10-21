import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  product = {} as Product;
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {}
}
