import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://moniquevandervloed.nl/wp-content/uploads/2017/05/kroket1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
