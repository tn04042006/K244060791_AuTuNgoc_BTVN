import { Component } from '@angular/core';
import { CatalogService14 } from '../services/catalog-service14';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-service-component',
  standalone: false,
  styleUrl: './catalog-service-component.css',
  templateUrl: './catalog-service-component.html',
})
export class CatalogServiceComponent {
  public products: any;

constructor(pservice: CatalogService14, private router: Router) {
  this.products = pservice.getCategories();
}

viewDetail(f: any) {
  this.router.navigate([
    'service-product-image-event',
    f.ProductId
  ]);
}
}
