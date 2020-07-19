import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded  = new EventEmitter< Ingredient >();
  @ViewChild('inputName') inputName : ElementRef ;
  @ViewChild('inputAmount') inputAmount : ElementRef ;
  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked() {
      this.ingredientAdded.emit(
        new Ingredient(this.inputName.nativeElement.value, Number(this.inputAmount.nativeElement.value)));
  }
}
