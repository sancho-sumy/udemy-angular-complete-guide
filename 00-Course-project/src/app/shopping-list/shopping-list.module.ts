import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from '../loggin.service';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule, SharedModule, FormsModule, ShoppingListRoutingModule],
  // providers: [LoginService],
})
export class ShoppingListModule {}
