import { GreekComponent } from './greek/greek.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { RussianComponent } from './russian/russian.component';
import { TeluguComponent } from './telugu/telugu.component';
import { RandomComponent } from './random/random.component';

export class QuoteGenerator {

  static fetchQuote() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', 'https://talaikis.com/api/quotes/', true);

      request.onload = function() {
        if(request.status === 200) {
          let quotePackage = JSON.parse(request.response);
          let quoteObj = quotePackage.find(p => p.cat === "funny");

          resolve(quoteObj);
        }
        else {
          reject(request.statusText);
        }
      }

      request.send();
    });
  }

}
