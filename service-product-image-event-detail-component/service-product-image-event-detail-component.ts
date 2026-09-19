import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService13 } from '../services/product-service13';

@Component({
  selector: 'app-service-product-image-event-detail-component',
  standalone: false,
  styleUrl: './service-product-image-event-detail-component.css',
  templateUrl: './service-product-image-event-detail-component.html',
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductService13,
    private router: Router
  ) {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');

      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}