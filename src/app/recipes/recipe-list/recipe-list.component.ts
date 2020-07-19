import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {computeLineStartsMap} from '@angular/core/schematics/utils/line_mappings';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes : Recipe[] =  [
    new Recipe('Test Recipe 1' , 'this is a Test Recipe 1',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg' ),
    new Recipe('Test Recipe 2' , 'this is a Test Recipe 2',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg')];
  @Output() selectdRecipe  = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.selectdRecipe.emit(selectedRecipe);
  }
}
