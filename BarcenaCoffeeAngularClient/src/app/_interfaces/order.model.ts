import { Drink } from './drink.model';

export interface Order{
    id: string;
    drinkId: string;
    pantryId: string;
    orderDate: Date;
}