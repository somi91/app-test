import { Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { IPlace } from '../../interfaces/IPlace';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private places: BehaviorSubject<IPlace[]> = new BehaviorSubject([]);

  get Places() {
    return this.places;
  }

  constructor(private api: ApiService) { }

  getPlaces() {
    
  }

  getWeather(city) {
    this.api.getWeather(city)
      .pipe(take(1))
      .subscribe( (data: any) => {
        console.log('AppStateService', data);
        const placeWeather: IPlace = {
          name: data.name,
          country: data.sys.country,
          deg: Math.round(data.main.temp - 273.15),
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        };
        const exists = this.places.value.findIndex(el => placeWeather.name === el.name);
        if(exists === -1) this.places.next(this.places.value.concat(placeWeather));
      })
  }

  removeItem(placeWeather, index) {
    const exists = this.places.value.findIndex(el => placeWeather.name === el.name);
    if(exists > -1) {
      this.places.value.splice(exists, 1);
      this.places.next(this.places.value);
    }
  }

}
