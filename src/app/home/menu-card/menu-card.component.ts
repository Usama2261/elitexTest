import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from 'src/app/Model/Menu';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  @Input() Menu: Menu = new Menu();
  @Output() isSubmission = new EventEmitter<string>();


  addToCart(menuName: string){
    this.isSubmission.emit(menuName);
  }
}
