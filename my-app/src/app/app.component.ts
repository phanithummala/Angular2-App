import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  constructor(private http: Http){}
  Cityname='';
  /*searchCity()
  {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.Cityname+'&APPSID=9d5d30e21332e61f423f2fb4a0a9a429')
    .subscribe(
      (res:Response)=>{const WeatherCity=res.json();
        console.log(WeatherCity);
                      }
              )  
  }*/
}
