import { QuoteGenerator } from './quote-generator.model';
import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuote() {

    return QuoteGenerator.fetchQuote();

  }

  getFunnyQuote(quotePackage): string {

    return quotePackage.quote;
  }




}
