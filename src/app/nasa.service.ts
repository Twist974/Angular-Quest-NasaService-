import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  url: string = "https://api.nasa.gov/planetary/apod?api_key=fiPOczCcvFw8O0I1N6D4wNXWevYF4O7xJWiT7LqX"
  private http: HttpClient;

  constructor(private service: HttpClient) {
    this.http = service;
  }
  public getImageOfTheDay(): Observable<any> {
    const observable : Observable<any> = this.http.get(this.url);
     const treatment = (data: any) => {
      return data.url as string;
    };
    return observable.pipe(map(treatment));
  }
}