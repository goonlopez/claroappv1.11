import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoNumero } from '../interfaces/info-numero.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoNumerosService {

  info: any[] = [];
 
 

  constructor( private http: HttpClient ) { 

    this.cargarInfo();
  }


    private cargarInfo() {
      
     // Lee Json y toma propiedades para ser vistos o utilizados en las paginas
     this.http.get('https://claroapp-html.firebaseio.com/data.json')
     .subscribe( (resp: any[]) => {

       this.info = resp;
       console.log(resp);

      });

    }

}
