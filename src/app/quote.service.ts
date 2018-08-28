import { QuoteGenerator } from './quote-generator.model';
import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuote() {

    return QuoteGenerator.fetchQuote();

  }

  getFunnyQuote(quotePackage): string {
    let MAX_LENGTH = 75;
    let quoteString = '';

    if(quotePackage.quote.length >= MAX_LENGTH) {
      for(let i = 0; i <= MAX_LENGTH; i++) {
        if(i == MAX_LENGTH && quotePackage.quote[i] !== ' ') {
          MAX_LENGTH++;
        }
        quoteString += quotePackage.quote[i];
      }
      return quoteString + ' POOP.';
    }

    return quotePackage.quote + ' POOP.';
  }




}
