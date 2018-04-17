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
        idCategoryFood: "idHaiSan",
        categoryFood: "Hải Sản",
        price: 20, quantity: 12
      },
      {
        id: "213huf", name: "Hồng trà chanh",
        idCategoryFood: "idHongtra",
        categoryFood: "Hồng trà",
        price: 15, quantity: 10
      },
      {
        id: "17td", name: "Hồng trà dưa lưới",
        idCategoryFood: "idHongtra",
        categoryFood: "Hồng trà",
        price: 16, quantity: 6
      },
      {
        id: "4feuh", name: "Trà sữa truyền thống",
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