var message=;

//Collection of quotes to be used in quote generator
var quotes = [
{quote :'"I became insane, with long intervals of horrible sanity."', source : '-Edgar Allan Poe' },
{quote : '"We loved with a love that was more than love."' , source : '-Edgar Allan Poe'},
{quote : '"I was never really insane except upon occasions when my heart was touched."', source : '-Edgar Allan Poe'},
{quote : '"There is no exquisite beauty… without some strangeness in the proportion."', source : 'Edgar Allan Poe'},
{quote : '"Believe only half of what you see and nothing that you hear."', source : 'Edgar Allan Poe'}
];

//Generates random quotes to be used 
  function getRandomQuotes (){
var randomQuote= math.floor(math.random())*quotes.length);
return randomQuote;
}


//prints random quotes to page
function printQuote () {
  message = '<p class="quote">' getRandomQuotes.quote '</p>' 
  message += '<p class="source">' getRandomQuotes.source '</p>';
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = message;
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}

while (true){
  printQuote();
}
}
