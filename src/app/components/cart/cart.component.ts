import { CartService } from './../../services/cart.service';
import { Doctor } from './../../domain/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data: Doctor[];
  totalAmount = 0;
  constructor(private service: CartService) { }
  ngOnInit() {
    this.data = this.service.getCartDoctors();
    this.totalAmount = this.service.getCartTotalAmount();
  }
  order() {
    console.log('Votre rendez est le ' + JSON.stringify(this.data));
  }

}
