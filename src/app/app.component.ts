import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNasa';

  public imgOfTheDay: string = "";
  private service: NasaService;

  constructor(service: NasaService) {
    this.service = service;
  }

  ngOnInit(): void{
    this.service.getImageOfTheDay().subscribe((url: string) => {
      this.imgOfTheDay = url;
    });
  }
}
