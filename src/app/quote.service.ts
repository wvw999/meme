import { QuoteGenerator } from './quote-generator.model';
import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {
  quote: string = '';

  constructor() { }

  getQuote(): string {

    let quotePromise = QuoteGenerator.fetchQuote();
    quotePromise.then(quoteData => {
      this.quote = quoteData.quote;
    }).catch(error => {
      console.log(error);
    })

    return this.quote;
  }



}
