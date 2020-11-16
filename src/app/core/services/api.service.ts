import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = 'https://api.openweathermap.org/data/2.5/';
  key: string = '&appid=8041567580af3b158a42e66ef367b44a';

  constructor(private http: HttpClient) { }

  getWeather(place) {
    let apiUrl = this.host + 'weather?q=' + place + this.key;
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // this.reduceLoader();
        return data;
      }),
      catchError(error => {
        // this.reduceLoader();
        return throwError(error);
      })
    )

  }

}
