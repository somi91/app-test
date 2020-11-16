import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlace } from 'src/app/core/interfaces/IPlace';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: IPlace;
  @Output() removeEvent: EventEmitter<IPlace> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
    console.log('this.item', this.item);
  }

  remove() {
    this.removeEvent.emit(this.item);
  }
}
