import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('FirstTestRecipe', 'First Test Recipe Long Description ', 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/youtube-512.png'),
    new Recipe('FirstTestRecipe', 'First Test Recipe Long Description ', 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/youtube-512.png'),
    new Recipe('FirstTestRecipe', 'First Test Recipe Long Description ', 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/youtube-512.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
