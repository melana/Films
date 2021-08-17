import { Component, OnInit, Input} from '@angular/core';
import { Film } from '../app.component';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input()
  film!: Film;
  id: string = '';
  name: string = '';
  genre1: string = '';
  genre2: string = '';
  year: string = '';
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
