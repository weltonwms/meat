class Order {
    constructor(
        public address: string,
        public email: string,
        public name:string,
        public number:number,
        public optionalAddres:string,
        public paymentOptions:string,
        public items:Array<OrderItem>

    ) { }
}

class OrderItem {
    constructor(
        public qtd:number,
        public menuId:string
        ){}
}

export { Order, OrderItem }