import { Injectable } from '@angular/core';
import { Menu } from '../Model/Menu';

@Injectable({
  providedIn: 'root'
})
export class ElitexService {

  constructor() { }

  menus: Menu[] = [
    {
      name: "Pizza",
      imgPath: "../../../assets/pizza.jpg",
      description: ""
    },
    {
      name: "Burger",
      imgPath: "../../../assets/burger.jpg",
      description: ""
    },
    {
      name: "Chicken",
      imgPath: "../../../assets/chicken.jpg",
      description: ""
    },
    {
      name: "Beef",
      imgPath: "../../../assets/beef.jpg",
      description: ""
    }
  ];

  getMenus(){
    return this.menus;
  }
}
