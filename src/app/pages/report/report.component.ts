import { Component } from '@angular/core';
import { Libro } from '../../interfaces/libro';
import { Autor } from '../../interfaces/autor';
import { DataService } from '../../providers/data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  displayedColumns: string[] = ['idlibro', 'nombre', 'editorial', 'anio'];
  public dataLibro : Libro[] = [];
  public dataAutor : Autor[] = [];

  autoresSelect = new FormControl('');
  
  constructor(private dataProvider: DataService) { }

  ngOnInit() {
    this.dataProvider.getResponseAutor().subscribe((response) => { 
      this.dataAutor = (response as Autor[]); 
    })
    this.dataProvider.getResponseLibro().subscribe((response) => { 
      this.dataLibro = (response as Libro[]); 
    })
  }

  selection(id:number){
    
    this.dataProvider.getResponseLibroByAutorId(id).subscribe((response) => { 
      this.dataLibro = (response as Libro[]); 
    })

    console.log(this.dataLibro)
  }
}
