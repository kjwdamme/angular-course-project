import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://moniquevandervloed.nl/wp-content/uploads/2017/05/kroket1.jpg',
      [
        new Ingredient('vlees', 1),
        new Ingredient('poep', 5)
      ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://moniquevandervloed.nl/wp-content/uploads/2017/05/kroket1.jpg',
      [
        new Ingredient('ding', 2)
      ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://moniquevandervloed.nl/wp-content/uploads/2017/05/kroket1.jpg',
      [
        new Ingredient('test', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
