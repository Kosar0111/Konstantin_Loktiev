import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyAngular';
  currjson: any = [];

  base = 'USD';
  cont2 = 'USD';
  result: string = '1'

  changebase(a: string) {
    this.base = a;
  }

  tocountry(b: string) {
    this.cont2 = b;
  }

  constructor(private currency: CurrencyapidataService) { }

  convert() {
    this.currency.getcurrencydata(this.base).subscribe(data => {
      this.currjson = JSON.stringify(data)
      // console.log(this.currjson);
      this.currjson = JSON.parse(this.currjson)
      //console.log(this.currjson);

      if (this.cont2 == 'USD') {
        this.result = this.currjson.rates.USD
      }

      if (this.cont2 == 'UAH') {
        this.result = this.currjson.rates.UAH
      }

      if (this.cont2 == 'EUR') {
        this.result = this.currjson.rates.EUR
      }

    })
  }


}


