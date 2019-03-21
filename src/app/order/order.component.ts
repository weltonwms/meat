import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { FormBuilder, Validator, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { RadioOption } from '../share/radio/radio-option.model';
import {Order, OrderItem} from './order.model';
import { Cart } from '../restaurant-details/cart/cart.model';
import { NotificationService } from '../share/messages/notification.service';
import {Router} from '@angular/router';
import { LoginService } from '../security/login/login.service';
import {User} from '../security/user.model';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  orderForm:FormGroup;
  radioOptions:Array<RadioOption>=[
    {label:"Dinheiro", value:"DIN"},
    {label:"Cartão de Crédito", value:"CRE"},
    {label:"Cartão de Débito", value:"DEB"}
  ];

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
    private notification:NotificationService,
    private router:Router,
    private loginService:LoginService
    ) { }

  ngOnInit() {
    let user= this.loginService.isUserLogged()?this.loginService.userLogged:new User();
    this.orderForm = this.fb.group({
      name: this.fb.control(user.name, [Validators.required]),
      email: this.fb.control(user.email, [Validators.required, Validators.email]),
      emailConfirm: this.fb.control(user.email, [Validators.required, Validators.email]),
      address: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      number: this.fb.control('', [Validators.required, Validators.pattern(/[0-9]$/)]),
      optionalAddress: this.fb.control(''),
      paymentOptions: this.fb.control('',Validators.required),
    }, { validator: OrderComponent.emailEqualTo }); //chave validator aceita array de funcões também
    
  }

  static emailEqualTo(group:AbstractControl):{[key:string]:boolean} {
    let emailValue = group.get('email').value;
    let emailConfirm = group.get('emailConfirm').value;
    if(!emailValue || !emailConfirm){
      return undefined;
    }
    if (emailConfirm !== emailValue) {
      return { emailNotEqual: true }
    }
    return undefined;
  }

  decrementItem(item) {
    return this.orderService.decrementItem(item);
  }

  incrementItem(item) {
    return this.orderService.incrementItem(item);
  }

  removeItem(item) {
    return this.orderService.removeItem(item);
  }


  valorFrete() {
    return this.orderService.valorFrete;
  }

  valorItens() {
    return this.orderService.totalItens();
  }

  items() {
    return this.orderService.items();
  }

  checkOrder(order:Order){
    order.items= this.items().map((cart:Cart)=> new OrderItem(cart.qtd,cart.item.id));
    this.orderService.checkOrder(order).subscribe(response=>{
      console.log(response);
      this.orderService.clear();
      this.notification.notify('Compra Realizada com Sucesso');
      this.router.navigate(['/order_summary',response.id]);
      
    });
  }

  debugar(x) {
    console.log(x);
  }
}
