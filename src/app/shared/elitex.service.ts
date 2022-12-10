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
      description: "",
      price:"5$"
    },
    {
      name: "Burger",
      imgPath: "../../../assets/burger.jpg",
      description: "",
      price:"10$"
    },
    {
      name: "Chicken",
      imgPath: "../../../assets/chicken.jpg",
      description: "",
      price:"15$"
    },
    {
      name: "Beef",
      imgPath: "../../../assets/beef.jpg",
      description: "",
      price:"25$"
    }
  ];

  getMenus(){
    return this.menus;
  }
}
