import { Service } from '@angular/core';

@Service()
export class ProductService13 {
    productsImage = [
    {"ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg"},
    {"ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_master.jpg"},
    {"ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://product.hstatic.net/200000078749/product/uoc_tang_luc_sting_dau_lon_330ml_copy_5f2eaa94e75c42c392d39d0286f244fa_0c55b2e03d01492eb7d195cb69da7ebd.jpg"}
  ];

  constructor() {}

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}
