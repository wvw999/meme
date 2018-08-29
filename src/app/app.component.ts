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
  famousRename = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  funnyTitles = ["poop", "crap", "a waste of time", "junk", "garbage", "offal", "detritus", "nonsense", "dirty socks", "a handful of cheerios", "stuff your mom told you not to do", "moist underwear"]
  titleNumber: number;
  title: string = 'gibberish';
  english: EnglishComponent = new EnglishComponent(this.quoteService);

  constructor(private quoteService: QuoteService, ) {}

  getMeme(language: string) {
    this.randomSelection = new FamousComponent().GetFamousPerson();
    if(language === "english") {
      this.quote = this.english.getEnglishQuote();
    }
    else if(language === "japanese") {
      this.quote = this.quoteService.getJapaneseQuote();
    }
    else if(language === "special") {
      this.quote = this.english.getEnglishQuote();
      let quoteArray = this.quote.split("");
      this.titleNumber = Math.floor(Math.random() * 11);
      quoteArray.splice(this.quote.length -1, 1, "")
      this.quote = quoteArray.join("") + " of " + this.funnyTitles[this.titleNumber];
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
      let person = new FamousComponent().GetFamousPerson();
      console.log(person);
      let outputName = [];
      let letter = this.famousRename.charAt(Math.floor(Math.random() * this.famousRename.length));
      let personSplit = person.split(" ");
      for(let i = 0; i < personSplit.length; i++){
        let rename = personSplit[i].split("");
        rename[0] = letter;
        let renamed = rename.join("");
        outputName.push(renamed);
      }
      this.randomSelection = outputName.join(" ");
    }

    this.randomNumber = Math.floor(Math.random() * 12000)+1;
    this.titleNumber = Math.floor(Math.random() * 11);
    this.title = this.funnyTitles[this.titleNumber];

  }

  ngOnInit() {
    this.english.populateQuotes();
  }

}
