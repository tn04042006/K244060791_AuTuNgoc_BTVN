import { Service } from '@angular/core';

@Service()
export class CatalogService14 {
  datas = [
    {
      "Cateid": "cate1",
      "CateName": "nuoc ngot",
      "Products": [
        {
          "ProductId": "p1",
          "ProductName": "Coca",
          "Price": 100,
          "Image": "https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg"
        },
        {
          "ProductId": "p2",
          "ProductName": "Pepsi",
          "Price": 300,
          "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaH9i-jSSitGFHJ0OqCUA0ouXRO-CBBKu6AEF6kgnKA&s=10"
        },
        {
          "ProductId": "p3",
          "ProductName": "Sting",
          "Price": 200,
          "Image": "https://product.hstatic.net/200000078749/product/uoc_tang_luc_sting_dau_lon_330ml_copy_5f2eaa94e75c42c392d39d0286f244fa_0c55b2e03d01492eb7d195cb69da7ebd.jpg"
        }
      ]
    },
    {
      "Cateid": "cate2",
      "CateName": "Bia",
      "Products": [
        {
          "ProductId": "p4",
          "ProductName": "Heleiken",
          "Price": 500,
          "Image": "https://www.heineken.com/media/zlhhgjsm/heineken-original-bottle.png"
        },
        {
          "ProductId": "p5",
          "ProductName": "333",
          "Price": 400,
          "Image": "https://sabelado.com.vn/upload/product/570x400x2/594198310266.png"
        },
        {
          "ProductId": "p6",
          "ProductName": "Sai Gon",
          "Price": 600,
          "Image": "https://biahaihoi.vn/wp-content/uploads/2025/04/special-635x515-1.png"
        }
      ]
    }
  ];

  constructor() {}

  getCategories() {
    return this.datas;
  }
}
