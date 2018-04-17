import { ItemOfBillModel } from "./item-of-bill";

export class TableModel{
    id: number;
    status: number;
    // hoa don
    itemsOfBill: ItemOfBillModel[];
    total: number;
}