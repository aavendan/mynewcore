import { Component } from '@angular/core';
import { Autor } from '../../interfaces/autor';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  displayedColumns: string[] = ['idautor', 'nombre'];
  public data : Autor[] = [];

  constructor(private dataProvider: DataService) { }

  ngOnInit() {
    this.dataProvider.getResponseAutor().subscribe((response) => { 
      this.data = (response as Autor[]); 
    })
  }
}
