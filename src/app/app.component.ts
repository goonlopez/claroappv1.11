import { Component } from '@angular/core';
import { InfoNumerosService } from './services/info-numeros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor (public infoNumerosService: InfoNumerosService) { }

  ngOnInit() {
    
  }

}


