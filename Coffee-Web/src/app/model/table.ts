import { ItemOfBillModel } from "./item-of-bill";

export class TableModel{
    id: number;
    name: string;
    status: number;
    // hoa don
    itemsOfBill: ItemOfBillModel[];
    total: number;
}