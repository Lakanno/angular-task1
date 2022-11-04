import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {
  isValid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem(id: any){
    console.log(id);
  }




}
