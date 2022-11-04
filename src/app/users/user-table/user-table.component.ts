import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/interfaces';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  isSelected: boolean = false;
  @Output() deleteUserRow = new EventEmitter();

  selectedUserID: number = 0;
  users: IUser[] = [
    {
      id:1,
      age: 19,
      email:'user.1@gmail.com',
      mobile:'599402159',
      name:'John',
      lastName:'Doe',
      done: false,
    },
    {
      id:2,
      age: 49,
      email:'user.2@gmail.com',
      mobile:'589447651',
      name:'Jeff',
      lastName:'Scott',
      done: false,
    },
    {
      id:3,
      age: 80,
      email:'user.3@gmail.com',
      mobile:'598770348',
      name:'Erick',
      lastName:'mayhew',
      done: false,
    },
    {
      id:4,
      age: 29,
      email:'user.3@gmail.com',
      mobile:'598770349',
      name:'Lika',
      lastName:'Nodia',
      done: false,
    },
    {
      id:5,
      age: 29,
      email:'user.3@gmail.com',
      mobile:'577471494',
      name:'Laka',
      lastName:'Nodia',
      done: false,
    },
  ]

  constructor( private el: ElementRef) { }

  ngOnInit(): void {
  }

  onSwitchColor(selectedId: number){
    this.users[selectedId-1].done = !this.users[selectedId-1].done;
    console.log(selectedId);
  }

  deleteUser(id: number) {
    this.deleteUserRow.emit(id);
    console.log(id);
  }
}
