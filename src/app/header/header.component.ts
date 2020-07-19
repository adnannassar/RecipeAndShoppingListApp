import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {outputPath} from '@angular-devkit/build-angular/src/test-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected  =  new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}
