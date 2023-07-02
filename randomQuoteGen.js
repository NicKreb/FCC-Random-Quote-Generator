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
  {quote: "All we have to do, is decide what to do with the time that is given to us",
  author: "Gandalf, the White"}
  ];

var colors = [
  '#99E156',
  '#3BD9BA',
  '#3BD970',
  '#79D93B',
  '#D99D3B',
  '#3B74D9',
  '#8A3BD9',
  '#D93BCD',
  '#DCDCDC',
  '#E15656'
];

function genQuote(){
  let x = Math.floor(Math.random()*quoteObjectsArray.length);
  
  document.getElementById("text").innerHTML = quoteObjectsArray[x].quote;
  
  document.getElementById("author").innerHTML = quoteObjectsArray[x].author;
}

console.log(genQuote());
