import { Component, ElementRef, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { GreekComponent } from './greek/greek.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { RussianComponent } from './russian/russian.component';
import { TeluguComponent } from './telugu/telugu.component';
import { RandomComponent } from './random/random.component';
import { FamousComponent } from './famous/famous.component';
import { EnglishComponent } from './english/english.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService]
})
export class AppComponent implements OnInit {
  quote: string = '';
  randomNumber: number;
  randomSelection: string;
  funnyTitles = ["poop", "crap", "a waste of time", "junk", "garbage", "offal", "detritus", "nonsense", "dirty socks", "a handful of cheerios", "stuff your mom told you not to do", "moist underwear"]
  titleNumber: number;
  title: string;
  english: EnglishComponent = new EnglishComponent(this.quoteService);

  constructor(private quoteService: QuoteService, ) {}

  getMeme(language: string) {
    if(language === "english") {
      this.quote = this.english.getEnglishQuote();
      console.log(this.quote);
    }
    else if(language === "japanese") {
      this.quote = this.quoteService.getJapaneseQuote();
    }
    else if(language === "special") {
      this.quote = this.english.getEnglishQuote();
      let quoteArray = this.quote.split("");
      quoteArray.splice(this.quote.length -1, 1, ' OF POOP.')
      this.quote = quoteArray.join("");
    }
    else if(language === "russian") {
      this.quote = this.quoteService.getRussianQuote();
    }
    else if(language === "greek") {
      this.quote = this.quoteService.getGreekQuote();
    }
    else if(language === "telugu") {
      this.quote = this.quoteService.getTeluguQuote();
    }
    else if(language === "random") {
      let english = this.english.getEnglishQuote();
      console.log(english);
      this.quote = this.quoteService.getRandomQuote(english);
      console.log(this.quote);
    }

    this.randomNumber = Math.floor(Math.random() * 12000)+1;
    // this.randomPersonNumber = Math.floor(Math.random() * 466);
    this.randomSelection = new FamousComponent().GetFamousPerson();
    this.titleNumber = Math.floor(Math.random() * 11);
    this.title = this.funnyTitles[this.titleNumber];

  }

  ngOnInit() {
    this.english.populateQuotes();
  }

}
