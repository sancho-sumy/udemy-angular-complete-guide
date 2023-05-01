import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../loggin.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => (this.ingredients = newIngredients)
    );
    this.loginService.printLog('Hello from ShoppingListCompnent ngOnInit')
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
