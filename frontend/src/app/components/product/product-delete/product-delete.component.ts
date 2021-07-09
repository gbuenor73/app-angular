import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ProductReadComponent } from './../product-read/product-read.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => { this.product = product })
  }

  deleteProduct() {
    this.productService.delete(this.product.id).subscribe(() => {
      this.router.navigate(['/products']);
      this.productService.showMessage('Item exclido com Suceso!')
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
