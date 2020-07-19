import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeObject : Recipe;
  constructor() { }

  ngOnInit(): void {

  }
  onRecipeSelected(selectedRecipe : Recipe) {
    this.recipeObject = selectedRecipe;
  }
}
