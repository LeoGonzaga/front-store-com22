import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  product = {} as Product;
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((product: any[]) => {
      this.products = product;
      console.log(product);
    });
  }

  onOptionsSelected(value: string) {
    console.log('Produto id:' + value);
    this.product = { ...this.product, _id: value };
  }

  onQuantitySelected(e: any) {
    e.stopPropagation();
    console.log('Quantidade:' + e.target.value);
    this.product = { ...this.product, amount: e.target.value };
  }

  addCart() {
    console.log(this.product);
    this.productService
      .addProductInCart(this.product)
      .subscribe((product: any[]) => {
        console.log(product);
      });
  }
}
