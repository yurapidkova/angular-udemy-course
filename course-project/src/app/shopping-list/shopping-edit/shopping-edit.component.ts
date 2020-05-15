import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient;
  @Output()
  ingredientAdd = new EventEmitter<Ingredient>();

  constructor() {
    this.clearIngredient();
  }

  ngOnInit(): void {
  }

  onIngredientAdd = (): void => {
    if (!this.isIngredientValid()) {
      return;
    }
    this.ingredientAdd.emit(this.ingredient);
    this.clearIngredient();
  }

  onIngredientClear = (): void => {
    this.clearIngredient();
  }

  isIngredientValid = (): boolean => !!(this.ingredient.amount && this.ingredient.name);

  private clearIngredient = (): void => {
    this.ingredient = new Ingredient('', 0);
  }
}
