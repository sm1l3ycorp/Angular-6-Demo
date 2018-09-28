import { Component, OnInit } from '@angular/core';
import { Item } from './list-item';
import { ITEMS } from './mock-list';
import { componentRefresh } from '@angular/core/src/render3/instructions';
 
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  listItem = ITEMS;
  selectedItem: Item;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.selectedItem.selected = true;
    
  }

  delete(item: Item, index) {
    this.listItem.splice(index, 1);
  }

  logOut(): void {
    console.log('out');
  }

}
