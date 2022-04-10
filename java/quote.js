// document.querySelector('button');
// document.querySelector('.new-quote button');
// const quotebutton document.querySelector('#js-new-quote');


async function getQuote(){
  console.log("quote button was clicked")
  try{
    const response = await fetch(endpoint);
    if (!response.ok){
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.message);
  } catch(err){
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote){
   const quoteText = document.querySelector('#js-quote-text')
   quoteText.textcontent = quote;
}
const endpoint = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'

const quotebutton = document.querySelector('#js-new-quote');
quotebutton.addEventListener('click', getQuote);
