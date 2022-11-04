import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table/user-table.component';
import { UserActionComponent } from './user-action/user-action.component';



@NgModule({
  declarations: [
    UserTableComponent,
    UserActionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserTableComponent,
    UserActionComponent
  ]
})
export class UsersModule { }
