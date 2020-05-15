import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeSelectEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('burger1', 'mac', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035715_11.jpg?itok=urBA2ZBD'),
    new Recipe('burger2', 'mac', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035715_11.jpg?itok=urBA2ZBD'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelect = (recipe: Recipe): void => {
    this.recipeSelectEvent.emit(recipe);
  }
}
