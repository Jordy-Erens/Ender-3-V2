import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ender 3 V2 Maintenance';

  session: any;
  
  lengthSpool: string;
  lengthPrint: string;
  resultFilament: number;

  calculateFilament(){
    this.resultFilament = parseInt(this.lengthSpool) - parseInt(this.lengthPrint);

    let data = this.resultFilament;

    localStorage.setItem('session', JSON.stringify(data));

    let resultF = localStorage.getItem('session');
    this.session = JSON.parse(resultF);
  }


  newCosts: string;
  alreadySpend: string;
  resultCosts: number;

  calculateCosts(){
    this.resultCosts = parseInt(this.newCosts) + parseInt(this.alreadySpend);

    let data = this.resultCosts;

    localStorage.setItem('session', JSON.stringify(data));

    let resultC = localStorage.getItem('session');
    this.session = JSON.parse(resultC);
  }
}
