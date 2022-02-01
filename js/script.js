/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
quotes = new Array();
quotes.push({
    quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
    source: "Amanda Gorman",
    citation: "Twitter",
    year: "2020"
});
quotes.push({
    quote: "Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you.",
    source: "Gabrielle Union",
    citation: "Facebook",
    year: "2010"
});
quotes.push({
    quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
    source: "Lupita Nyong'o",
    citation: "Twitter",
    year: "2022"
});
quotes.push({
    quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.",
    source: "Michelle Obama",
    citation: "Web",
    year: "2009"
});
quotes.push({
    quote: "Always work hard and have fun in what you do because I think that's when you're more successful. You have to choose to do it",
    source: "Simone Biles",
    citation: "Instagram",
    year: "2018"
});
quotes.push({
    quote: "When your dreams are bigger than the places you find yourself in, sometimes you need to seek out your own reminders that there is more. And there is always more waiting for you on the other side of fear.",
    source: "Elaine Welteroth",
    citation: "Web",
    year: "2016"
});

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomNumber];
    return quote;
}


/***
 * `printQuote` function
***/
function printQuote() {
    let RandomQuote = getRandomQuote();

    document.querySelector(`.quote`).innerHTML = RandomQuote.quote;
    document.querySelector(`.source`).innerHTML = sourceLine(RandomQuote.source, RandomQuote.citation, RandomQuote.year);
}

function sourceLine(source, citation, year) {
    return `${source}<span class="citation">${citation}</span><span class="year">${year}</span>`;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener(`click`, printQuote)