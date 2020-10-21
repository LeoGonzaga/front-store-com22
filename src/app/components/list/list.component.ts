import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  showCart() {
    let array = [];
    let obj: any;
    this.productService.getItensCart().subscribe((product: any[]) => {
      console.log(product);

      product.map((i) => {
        console.log(i);
        let code = i.product[0]._id.toUpperCase().substring(0, 6);

        console.log(code);
        obj = {
          code,
          amount: i.amount,
          description: i.product[0].description,
          rebate: i.product[0].rebate,
          unitValue: i.product[0].unitValue,
          total:
            i.product[0].unitValue * i.amount -
            i.product[0].unitValue * (i.product[0].rebate / 100) * i.amount,
        };
        array.push(obj);
      });
      console.log(array);
      this.products = array;
    });
  }
}
