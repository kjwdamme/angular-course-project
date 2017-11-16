import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable
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

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
