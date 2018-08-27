import { QuoteGenerator } from './quote-generator.model';
import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuote(): any {

    let quotePromise = QuoteGenerator.fetchQuote();
    quotePromise.then(quoteData => {
      let quotePackage = quoteData;
      let funnyQuote = this.getFunnyQuote(quotePackage)
    }).catch(error => {
      console.log(error);
    })
  }

  getFunnyQuote(quotePackage): string {
    let quoteObj = quotePackage.find(p => p.cat === "funny");

    return quoteObj.quote;
  }




}
