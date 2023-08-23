import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URLAutor: string = "https://restlibreria-production.up.railway.app/rest/autor/findAll/json"
  private URLLibro: string = "https://restlibreria-production.up.railway.app/rest/libro/findAll/json"
  private URLLibroByAutor: string = ``

  constructor(private http: HttpClient) { }

  //Método con la petición HTTP
  getResponseAutor() {
    return this.http.get(this.URLAutor);
  }
  getResponseLibro() {
    return this.http.get(this.URLLibro);
  }

  getResponseLibroByAutorId(id: number) {
    this.URLLibroByAutor= `https://restlibreria-production.up.railway.app/rest/libro/findBookByAuthor/${id}/json`
    console.log(this.URLLibroByAutor)
    return this.http.get(this.URLLibroByAutor);
  }
}
