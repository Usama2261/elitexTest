import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
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
quantity: number = 1;

constructor(
  private _elitexService: ElitexService,
  config: NgbModalConfig, private modalService: NgbModal
  ){
    config.backdrop = 'static';
		config.keyboard = false;
  }

ngOnInit(){
this.getMenus();
}

getMenus(){
  this.menus = this._elitexService.getMenus();
}

update(event: any){
  this.isSubmission = event;
}

submit(content: any){
  this.isSubmission = false;
  this.modalService.open(content);
}

}
