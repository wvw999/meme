export class QuoteGenerator {

  static fetchQuote() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', 'https://talaikis.com/api/quotes/', true);

      request.onload = function() {
        if(request.status === 200) {
          let quotePackage = JSON.parse(request.response);
          let quoteObj = quotePackage[0];

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
