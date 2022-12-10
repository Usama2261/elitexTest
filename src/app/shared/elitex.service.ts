import { Injectable } from '@angular/core';
import { Menu } from '../Model/Menu';
import { Order } from '../Model/Order';

@Injectable({
  providedIn: 'root'
})
export class ElitexService {

  constructor() { }

  menus: Menu[] = [
    {
      name: "Pizza",
      imgPath: "../../../assets/pizza.jpg",
      description: "Tasty and Yummy Pizza",
      price:"5$"
    },
    {
      name: "Burger",
      imgPath: "../../../assets/burger.jpg",
      description: "Delicious Burger..",
      price:"10$"
    },
    {
      name: "Chicken",
      imgPath: "../../../assets/chicken.jpg",
      description: "Catch it.. slay it and then eat",
      price:"15$"
    },
    {
      name: "Beef",
      imgPath: "../../../assets/beef.jpg",
      description: ".....",
      price:"25$"
    },
    {
      name: "Chicken Karahi",
      imgPath: "../../../assets/beef.jpg",
      description: ".....",
      price:"25$"
    },
    {
      name: "Kabab",
      imgPath: "../../../assets/chicken.jpg",
      description: ".....",
      price:"25$"
    },
    {
      name: "Cold Drink",
      imgPath: "../../../assets/chicken.jpg",
      description: ".....",
      price:"25$"
    },
    {
      name: "Tea",
      imgPath: "../../../assets/chicken.jpg",
      description: ".....",
      price:"25$"
    },
    {
      name: "Coffee",
      imgPath: "../../../assets/chicken.jpg",
      description: ".....",
      price:"25$"
    },
    {
      name: "Juices",
      imgPath: "../../../assets/chicken.jpg",
      description: ".....",
      price:"25$"
    }
  ];

  orders: any = [];

  getMenus(){
    return this.menus;
  }

  addOrder(order: Order){
    debugger
    this.orders.push(order);
  }
}
