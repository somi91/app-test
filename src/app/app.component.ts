import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlace } from './core/interfaces/IPlace';
import { AppStateService } from './core/services/app-state/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  items: Observable<IPlace[]>;
  constructor(private appState: AppStateService) {
    this.items = appState.Places;
  }
  

  onRemove(event, index) {
    console.log(event);
    this.appState.removeItem(event, index);
  }

  onSearch(event) {
    console.log(event);
    this.appState.getWeather(event);
  }
}
