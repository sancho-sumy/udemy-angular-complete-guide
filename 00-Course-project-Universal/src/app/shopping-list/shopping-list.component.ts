import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { LoginService } from '../loggin.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs-compat';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangeSub: Subscription;

  constructor(
    private loginService: LoginService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
    //   (newIngredients: Ingredient[]) => (this.ingredients = newIngredients)
    // );
    // this.loginService.printLog('Hello from ShoppingListCompnent ngOnInit');
  }

  ngOnDestroy(): void {
    // this.igChangeSub.unsubscribe();
  }

  onNewIngredient(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
