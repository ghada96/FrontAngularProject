import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: Number;
  product: Product;


  constructor(private route: ActivatedRoute,private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];



    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['products']);
  }

}
