import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MicroserviceFE';
 
  microserviceResponse: any = "" ;

  constructor(private http: HttpClient) {}

  callMicroservice1() {
    this.http.get('http://localhost:3000/microservice1').subscribe((response) => {
      this.microserviceResponse = response;
    })
  }
  
  callMicroservice2() {
    this.http.get('http://localhost:3001/microservice2').subscribe((response) => {
      this.microserviceResponse = response;
    })
  }


}
