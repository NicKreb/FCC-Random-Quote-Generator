//random quote generator JS code
quoteObjectsArray = [
  {quote: "We out Here!",
   author: "Mike W."},
  {quote: "Drop it low!",
   author: "Lil John"},
  {quote: "No one exists like that, these are people who do not want others to feel the same pain that they have, and sacrified everything to do so",
  author: "Tanjiro, Demon Slayer"},
  {quote: "I believe in you, and need you to understand you have the power to change",
  author: "Nick H."},
  {quote: "We’re outsiders, so wouldn’t that be ‘muddling’?",
  author: "Goofy, KH2"},
  {quote: "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with'em later.",
  author: "Mitch Hedberg"},
  {quote: "Do not take Life too seriously. You'll never get out of it alive.",
  author: "Elbert Hubbard"},
  {quote: "I'd like to live like a poor man - only with a lot of money.",
  author: "Pablo Picasso"},
  ];


var colors = [
  '#C0D7D2',
  '#3BD9BA',
  '#3BD970',
  '#79D93B',
  '#D99D3B',
  '#3B74D9',
  '#8A3BD9',
  '#D93BCD'
];

var currentQuote = '',
  currentAuthor = '';

function quoteArrayIndex(){
 randomQuote = quoteObjectsArray[Math.floor(Math.random()*quoteObjectsArray.length)];
}

function genQuote(){
  var currentIndex = quoteArrayIndex();
  
  currentQuote = currentIndex.quote;
  currentAuthor = currentIndex.author;
}
