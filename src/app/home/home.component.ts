import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from '../Model/Menu';
import { Order } from '../Model/Order';
import { ElitexService } from '../shared/elitex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  menus: Menu[] = [];
  quantity: number = 1;
  formType = "Menu";

  order: Order = new Order();

  addedOrders: Order[] = [];

  constructor(
    private _elitexService: ElitexService,
    config: NgbModalConfig, private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.getMenus();
    this.getOrders();
  }

  getMenus() {
    this.menus = this._elitexService.getMenus();
  }

  getOrders(){
    this.addedOrders = this._elitexService.orders;
  }

  menuName: string = "";
  update(menuName: any) {
    this.formType = "Submit";
    this.menuName = menuName;
  }

  submit(content: any) {
    this.formType = "Menu";
    this.order.orderProduct = this.menuName;
    this._elitexService.addOrder(this.order); //Saving Orders
    this.modalService.open(content);
  }


}
