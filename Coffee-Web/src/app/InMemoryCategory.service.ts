import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryCategory implements InMemoryDbService {
  createDb() {
    let table = [
      { id: 1, status: 1 , itemsOfBill:[{idFood: "12fsd",
        nameFood: "Mực hấp",
        price: 20,
        quantity: 2,
        totalPrice: 40}],
        total: 40
      },
      { id: 2, status: 0 },
      { id: 3, status: 0 },
      { id: 4, status: 1 }
    ];
    let food = [
      {
        id: "12fsd", name: "Mực hấp",
        image: "http://mucmotnang.com.vn/wp-content/uploads/2016/06/muc-hap-sa.jpg",
        idCategoryFood: "idHaiSan",
        categoryFood: "Hải Sản",
        price: 20, quantity: 12
      },
      {
        id: "213huf", name: "Hồng trà chanh",
        image:"http://chachago.vn/wp-content/uploads/2015/02/chanh-olong.png",
        idCategoryFood: "idHongtra",
        categoryFood: "Hồng trà",
        price: 15, quantity: 10
      },
      {
        id: "17td", name: "Hồng trà dưa lưới",
        image:"https://media.foody.vn/images/foody-uno-quan-tea-milktea-ut-tich-402-636382988888482446.jpg",
        idCategoryFood: "idHongtra",
        categoryFood: "Hồng trà",
        price: 16, quantity: 6
      },
      {
        id: "4feuh", name: "Trà sữa truyền thống",
        image:"http://meetfresh.vn/wp-content/uploads/2015/06/winter-melon-fresh-milk-tea1.png",
        idCategoryFood: "idTrasua",
        categoryFood: "Trà sữa",
        price: 17, quantity: 12
      }
    ];
    let categoryFood = [
      {
        id: "idHaiSan", name: "Hải Sản",
      },
      {
        id: "idHongtra", name: "Hồng trà",
      },
      {
        id: "idTrasua", name: "Trà sữa",
      },
    ];
    return { table, food, categoryFood };
  }
}