import { QuoteGenerator } from './quote-generator.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class QuoteService implements OnInit {
  quotePackage: any;

  constructor() { }

  getQuote(): any {

    let quotePromise = QuoteGenerator.fetchQuote();
    quotePromise.then(quoteData => {
      this.quotePackage = quoteData;
    }).catch(error => {
      console.log(error);
    })
  }

  getFunnyQuote(): string {
    let quoteObj = this.quotePackage.find(p => p.cat === "funny");

    return quoteObj.quote;
  }

  ngOnInit() {
    console.log("init");
    this.getQuote();
  }



}
