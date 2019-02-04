import { MenuItem } from '../menu-item/menu-item.model';

export class Cart{
    item:MenuItem;
    qtd:number;

    constructor(item:MenuItem,qtd:number=1){
        this.item=item;
        this.qtd=qtd;
    }
    value(){
        return this.item.price* this.qtd;
    }

   
}