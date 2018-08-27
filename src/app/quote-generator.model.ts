export class QuoteGenerator {

  static fetchQuote() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', 'https://talaikis.com/api/quotes/random/', true);

      request.onload = function() {
        if(request.status === 200) {
          let quote = JSON.parse(request.response);

          resolve(quote);
        }
        else {
          reject(request.statusText);
        }
      }

      request.send();
    });
  }

}
