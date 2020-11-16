import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onQueryChange(event) {
    console.log('onQueryChange', event);
    this.searchEvent.emit(event);
  }

}
