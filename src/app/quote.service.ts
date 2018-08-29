import { QuoteGenerator } from './quote-generator.model';
import { Injectable, ElementRef } from '@angular/core';
import { GreekComponent } from './greek/greek.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { RussianComponent } from './russian/russian.component';
import { TeluguComponent } from './telugu/telugu.component';
import { RandomComponent } from './random/random.component';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuote() {

    return QuoteGenerator.fetchQuote();

  }

  getFunnyQuote(quotePackage): string {

    return quotePackage.quote;
  }

  getJapaneseQuote() {
    return new JapaneseComponent().getJapaneseQuote();
  }

  getRussianQuote() {
    return new RussianComponent().getRussianQuote();
  }

  getGreekQuote() {
    return new GreekComponent().getGreekQuote();
  }

  getTeluguQuote() {
    return new TeluguComponent().getTeluguQuote();
  }

  // getRandomizedQuote() {
  //   return new RandomComponent().getRandomQuote();
  // }




}
