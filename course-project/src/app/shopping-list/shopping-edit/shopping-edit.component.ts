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
    this.ingredient = this.getNewIngredient();
  }

  ngOnInit(): void {
  }

  onIngredientAdd = (): void => {
    if (!this.isIngredientValid()) {
      return;
    }
    this.ingredientAdd.emit(this.ingredient);
  }

  onIngredientClear = (): void => {
    this.ingredient = this.getNewIngredient();
  }

  isIngredientValid = (): boolean => !!(this.ingredient.amount && this.ingredient.name);

  private getNewIngredient = (name: string = '', amount: number = 0): Ingredient => new Ingredient(name, amount);
}
