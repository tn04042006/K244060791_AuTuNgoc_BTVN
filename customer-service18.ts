import { Service } from '@angular/core';

@Service()
export class CustomerService18 {
  datas = [
    {
      "CustomerTypeId": 1,
      "CustomterTypeName": "VIP",
      "Customers": [
        {
          "Id": "Cus123",
          "Name": "Obama",
          "Email": "obama@gmail.com",
          "Age": 67,
          "Image": "https://cdn2.tuoitre.vn/zoom/1200_1200/2018/6/9/photo1528499105396-1528499105396668506202.jpg"
        },
        {
          "Id": "Cus456",
          "Name": "Kim jong Un",
          "Email": "unun@gmail.com",
          "Age": 38,
          "Image": "https://cdnphoto.dantri.com.vn/ldu4Dm4w3Oj0uQaoVDuA_KjY38E=/thumb_w/1020/2025/02/28/kimtrieutienreuters-1740712272562.jpg"
        },
        {
          "Id": "Cus789",
          "Name": "Putin",
          "Email": "putin@gmail.com",
          "Age": 77,
          "Image": "https://c.dhcn.vn/img/mobile/d-baothanhhoa.vn/news/2637/361d4085054t11500l1-2224.webp"
        }
      ]
    },
    {
      "CustomerTypeId": 2,
      "CustomterTypeName": "Normal",
      "Customers": [
        {
          "Id": "Cus000",
          "Name": "Hồ Cẩm Đào",
          "Email": "hodao@gmail.com",
          "Age": 16,
          "Image": "https://s.rfi.fr/media/display/192605bc-0fdb-11ea-8d43-005056bf7c53/w:1280/p:4x3/2011-10-31T110104Z_1307974699_BM2E7AV0WY901_RTRMADP_3_AUSTRIA_0.jpg"
        },
        {
          "Id": "Cus111",
          "Name": "Tap Can Binh",
          "Email": "binhbinh@gmail.com",
          "Age": 67,
          "Image": "https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/w800/uploaded/ql0rp46pywc/2020_08_25/tap_can_binh_slate_gygw.jpg"
        }
      ]
    }
  ];

  getCustomers() {
    return this.datas;
  }
}