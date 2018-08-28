import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService]
})
export class AppComponent {
  title = 'crap';
  quote: string;
  randomNumber = Math.floor(Math.random() * 12000)+1;
  randomPersonNumber = Math.floor(Math.random() * 477);
  famousPerson = ["George Bancroft", "Brigham Young", "Victor Hugo", "Ralph Waldo Emerson", "George Sand", "William Lloyd Garrison", "John Stuart Mill", "Louis Agassiz", "Napoleon III", "Abraham Lincoln", "Leo XIII", "Horace Greeley", "Charles Dickens", "Henry Ward Beecher", "Charles Reade", "Anthony Trollope", "Russell Sage", "Henry David Thoreau", "Karl Marx", "George Eliot", "Herbert Spencer", "Mary Baker Eddy", "Matthew Arnold", "Goldwin Smith", "Stonewall Jackson", "Bayard Taylor", "Walter Bagehot", "Charles Eliot Norton", "George Meredith", "Carl Schurz", "Emily Dickinson", "Sitting Bull", "Leslie Stephen", "Edwin Booth", "William Morris", "Mark Twain", "Bret Harte", "Grover Cleveland", "John Morley", "Henry George", "Crazy Horse", "Edward VII", "Alfred Marshall", "Henry James", "Anatole France", "Elihu Root", "Buffalo Bill", "Ellen Terry", "Grant Allen", "Edmund Gosse", "Robert Louis Stevenson", "Oliver Lodge", "Brander Matthews", "Cecil Rhodes", "Oscar Wilde", "Josiah Royce", "Woodrow Wilson", "Pius XI", "Theodore Roosevelt", "John Dewey", "Jane Addams", "Rabindranath Tagore", "Edward Grey", "David Lloyd George", "Max Weber", "Rudyard Kipling", "Ramsay MacDonald", "Arnold Bennett", "William Allen White", "Andre Gide", "Frank Norris", "Cordell Hull", "Sri Aurobindo", "Al Smith", "Winston Churchill", "Thomas Mann", "Piux XII", "Isadora Duncan", "Carl Sandburg", "Albert Einstein", "Douglas MacArthur", "Pierre Teilhard de Chardin", "Virginia Woolf", "William Carlos Williams", "Harry Truman", "Ezra Pound", "Van Wyck Brooks", "Rupert Brooke", "John Foster Dulles", "Jawaharlal Nehru", "Ho Chi Minh", "Hu Shih", "Reinhold Niebuhr", "Mao Zedong", "Aldous Huxley", "George VI", "John Dos Passos", "William Faulkner", "Gunnar Myrdal", "Ernest Hemingway", "Adlai Stevenson", "Margaret Mead", "Talcott Parsons", "George Orwell", "Deng Xiaoping", "Jean-Paul Sartre", "Hannah Arendt", "Laurence Olivier", "Lyndon Johnson", "Barry Goldwater", "Mother Teresa", "Ronald Reagan", "Milton Friedman", "Richard Nixon", "Dylan Thomas", "Roland Barthes", "C. Wright Mills", "Indira Gandhi", "Billy Graham", "Daniel Bell", "Irving Howe", "Raymond Williams", "George McGovern", "Henry Kissinger", "Jimmy Carter", "Robert Kennedy", "Fidel Castro", "Gabriel Garcia Marquez", "Che Guevara", "Martin Luther King Jr.", "Jacques Derrida", "Mikhail Gorbachev", "Sylvia Plath", "Susan Sontag", "Ralph Nader", "Elvis Presley", "Carol Gilligan", "Saddam Hussein", "Anthony Giddens", "Lee Harvey Oswald", "John Lennon", "Bob Dylan", "Barbra Streisand", "Terry Eagleton", "Rajiv Gandhi", "Daniel Ortega", "Bill Clinton", "Salman Rushdie", "Clarence Thomas", "Nawaz Sharif", "Jesus", "Napoleon", "William Shakespeare", "Abraham Lincoln", "George Washington", "Aristotle", "Alexander the Great", "Thomas Jefferson", "Henry VIII of England", "Charles Darwin", "Elizabeth I of England", "Karl Marx", "Julius Caesar", "Queen Victoria", "Martin Luther", "Joseph Stalin", "Albert Einstein", "Christopher Columbus", "Isaac Newton", "Charlemagne", "Theodore Roosevelt", "Wolfgang Amadeus Mozart", "Plato", "Louis XIV of France", "Ludwig van Beethoven", "Ulysses S. Grant", "Leonardo da Vinci", "Augustus", "Carl Linnaeus", "Ronald Reagan", "Charles Dickens", "Paul the Apostle", "Benjamin Franklin", "George W. Bush", "Winston Churchill", "Genghis Khan", "Charles I of England", "Thomas Edison", "James I of England", "Friedrich Nietzsche", "Franklin D. Roosevelt", "Sigmund Freud", "Alexander Hamilton", "Mohandas Karamchand Gandhi", "Woodrow Wilson", "Johann Sebastian Bach", "Galileo Galilei", "Oliver Cromwell", "James Madison", "Gautama Buddha", "Mark Twain", "Edgar Allan Poe", "Joseph Smith, Jr.", "Adam Smith", "David, King of Israel", "George III of the United Kingdom", "Immanuel Kant", "James Cook", "John Adams", "Richard Wagner", "Pyotr Ilyich Tchaikovsky", "Voltaire", "Saint Peter", "Andrew Jackson", "Constantine the Great", "Socrates", "Elvis Presley", "William the Conqueror", "John F. Kennedy", "Augustine of Hippo", "Vincent van Gogh", "Nicolaus Copernicus", "Vladimir Lenin", "Robert E. Lee", "Oscar Wilde", "Charles II of England", "Cicero", "Jean-Jacques Rousseau", "Francis Bacon", "Richard Nixon", "Louis XVI of France", "Charles V, Holy Roman Emperor", "King Arthur", "Michelangelo", "Philip II of Spain", "Johann Wolfgang von Goethe", "Ali, founder of Sufism", "Thomas Aquinas", "Pope John Paul II", "René Descartes", "Nikola Tesla", "Harry S. Truman", "Joan of Arc", "Dante Alighieri", "Otto von Bismarck", "Grover Cleveland", "John Calvin", "John Locke", "Jesus Christ", "Albert Einstein", "Isaac Newton", "Leonardo da Vinci", "Aristotle", "Galileo Galilei", "Plato", "Charles Darwin", "Alexander the Great", "William Shakespeare", "Socrates", "Martin Luther King, Jr.", "Mahatma Gandhi", "Abraham Lincoln", "George Washington", "Moses", "Nikola Tesla", "Gautama Buddha", "Karl Marx", "Julius Caesar", "Napoleon Bonaparte", "Martin Luther", "Johannes Gutenberg", "Thomas Edison", "Wolfgang Amadeus Mozart", "Genghis Khan", "Marie Curie", "Nelson Mandela", "Benjamin Franklin", "Thomas Jefferson", "Ludwig van Beethoven", "Homer", "Michelangelo", "Christopher Columbus", "Henry Ford", "Bill Gates", "Confucius", "Winston Churchill", "John F. Kennedy", "Pythagoras", "Charlemagne", "Paul of Tarsus", "Archimedes", "Wright brothers", "Louis Pasteur", "Hippocrates", "Alexander Graham Bell", "Vladimir Lenin", "Walt Disney", "Nicolaus Copernicus", "Johann Sebastian Bach", "Mother Teresa", "Alan Turing", "Vincent van Gogh", "Sigmund Freud", "Marco Polo", "St Joan of Arc", "Anne Frank", "Steve Jobs", "Charlie Chaplin", "Johannes Kepler", "George Orwell", "Franklin D. Roosevelt", "Friedrich Nietzsche", "Voltaire", "Joseph Stalin", "Sun Tzu", "J. R. R. Tolkien", "Otto von Bismarck", "Dante Alighieri", "Sophocles", "René Descartes", "Charles Dickens", "Theodore Roosevelt", "Immanuel Kant", "Elizabeth I of England", "Neil Armstrong", "Alexander Fleming", "Gregor Mendel", "Edgar Allan Poe", "Euclid", "Mark Twain", "Stephen Hawking", "Herodotus", "Rosa Parks", "Sitting Bull", "Queen Victoria", "Peter the Great", "Ronald Reagan", "Wernher von Braun", "Pope Francis", "Niccolò Machiavelli", "Adam Smith", "Ferdinand Magellan", "Ptolemy", "Alfred Nobel", "Cleopatra", "Johann Wolfgang von Goethe", "Marilyn Monroe", "Abraham Lincoln", "Mother Teresa", "John F. Kennedy", "Martin Luther King", "Nelson Mandela", "Queen Elizabeth II", "Winston Churchill", "Donald Trump", "Bill Gates", "Muhammad Ali", "Mahatma Gandhi", "Margaret Thatcher", "Christopher Columbus", "Charles Darwin", "Elvis Presley", "Albert Einstein", "Paul McCartney", "Queen Victoria", "Pope Francis", "Jawaharlal Nehru", "Leonardo da Vinci", "Vincent Van Gogh", "Franklin D. Roosevelt", "Pope John Paul II", "Thomas Edison", "Rosa Parks", "Aung San Suu Kyi", "Lyndon Johnson", "Ludwig Beethoven", "Oprah Winfrey", "Indira Gandhi", "Eva Peron", "Benazir Bhutto", "George Orwell", "Desmond Tutu", "Dalai Lama", "Walt Disney", "Neil Armstrong", "Peter Sellers", "Barack Obama", "Malcolm X", "J.K.Rowling", "Richard Branson", "Pele", "Angelina Jolie", "Jesse Owens", "Ernest Hemingway", "John Lennon", "Henry Ford", "Haile Selassie", "Joseph Stalin", "Lord Baden Powell", "Michael Jordon", "George Bush Jnr", "Vladimir Lenin", "Ingrid Bergman", "Fidel Castro", "Leo Tolstoy", "Pablo Picasso", "Oscar Wilde", "Coco Chanel", "Charles de Gaulle", "Amelia Earhart", "John M Keynes", "Louis Pasteur", "Mikhail Gorbachev", "Plato", "Sting", "Mary Magdalene", "Alfred Hitchcock", "Michael Jackson", "Madonna", "Mata Hari", "Cleopatra", "Grace Kelly", "Steve Jobs", "Ronald Reagan", "Lionel Messi", "Babe Ruth", "Bob Geldof", "Leon Trotsky", "Roger Federer", "Sigmund Freud", "Woodrow Wilson", "Mao Zedong", "Katherine Hepburn", "Audrey Hepburn", "David Beckham", "Tiger Woods", "Usain Bolt", "Carl Lewis", "Prince Charles", "Jacqueline Kennedy Onassis", "C.S. Lewis", "Billie Holiday", "J.R.R. Tolkien", "Billie Jean King", "Anne Frank", "Simon Bolivar", "Marie Antoinette", "Cristiano Ronaldo", "Emmeline Pankhurst", "Emile Zatopek", "Lech Walesa", "Julie Andrews", "Florence Nightingale", "Marie Curie", "Stephen Hawking", "Tim Berners Lee", "Lance Armstrong", "Shakira", "Jon Stewart", "Wright Brothers  Orville", "Roman Abramovich", "Tom Cruise", "Rupert Murdoch", "Al Gore", "Sacha Baron Cohen", "George Clooney", "Paul Krugman", "Jimmy Wales", "Brad Pitt", "Kylie Minogue", "Malala Yousafzai", "Stephen King"];
  randomSelection = this.famousPerson[this.randomPersonNumber];
  // this section is a test of the quote trncating service
  longQuotes = ["some clever words", "more clever words", "a pair of red shoes","Experience hath shewn, that even under the best forms of government those entrusted with power have, in time, and by slow operations, perverted it into tyranny.","Next to being witty, the best thing is being able to quote another's wit.","Right actions in the future are the best apologies for bad actions in the past.","Artists are notoriously snooty and suspicious of anything coming from the business community.","Many people would no more think of entering journalism than the sewage business - which at least does us all some good.","My first car was a motorcycle.","The United Nations four or five years ago put out a study that said the meat industry, meat-eating, growing meat for food is the No. 1 killer of our planet - not No. 2 or No. 3: No 1. You know what's No. 2? Transportation. Everyone thinks that No. 1 is transportation, and goes out and buys a hybrid car. Screw the hybrid cars. Don't eat hamburgers.","Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.","If I want to knock a story off the front page, I just change my hairstyle."];
  shortQuotes =[];
  runner = this.longQuotes.forEach(( index ) => {
    if (index.length < 40) {
      this.shortQuotes.push(index);
    }
  });
  console.log(shortQuotes);
  randomShortNumber = Math.floor(Math.random() * this.shortQuotes.length-1);
  testQuote = this.shortQuotes[this.randomShortNumber];
  // end of test of truncater: does not work yet. so excite. very wow

  constructor(private quoteService: QuoteService) {}

  getMeme() {
    this.quote = this.quoteService.getFunnyQuote();
  }

}
