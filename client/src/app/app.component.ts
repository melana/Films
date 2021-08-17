import { Component } from '@angular/core';
import { FilmComponent } from './film/film.component';
import { HttpService } from './http.service';

export interface Film {
  id: string;
  name: string;
  genre1: string;
  genre2: string; 
  year: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Films';
  filterTerm: string = "";

  films: FilmComponent[]=[];

    constructor(private httpService: HttpService){}
      
    ngOnInit(){   
        this.httpService.getData().subscribe((data: any) => this.films=data["filmList"]);
    }
}
