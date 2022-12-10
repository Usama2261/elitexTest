import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Menu } from '../Model/Menu';
import { ElitexService } from '../shared/elitex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

menus: Menu[] = [];
isSubmission: boolean = false;

constructor(private _elitexService: ElitexService){}

ngOnInit(){
this.getMenus();
}

getMenus(){
  this.menus = this._elitexService.getMenus();
}

update(event: any){
  this.isSubmission = event;
}

submit(){
  this.isSubmission = false;
}

}
