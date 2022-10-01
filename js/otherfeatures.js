
//settings main click

const settingsMain = document.querySelector('.settings-img');
const settingsToggle = document.querySelector('.settings-popup');

settingsMain.addEventListener('click', () => {
    settingsToggle.classList.toggle("active");
})

//Add a quote button click

const quoteBtn = document.querySelector('.ellipsis-vertical');
const insertQuote = document.querySelector('.insertquote-popup');

quoteBtn.addEventListener('click',() => {
    insertQuote.classList.toggle("active");
})

//Cancel add a quote button click


const quoteCancel = document.querySelector('close-btn');
const quotePopup = document.querySelector('.insertquote-popup');

quoteCancel.addEventListener('click',() => {
    quotePopup.classList.remove('active');
})



//QuoteGenerator
function randomQuote () {
var quotes = 
[`“Tough times don’t last. Tough people do.”`,
`“It does not matter how slowly you go as long as you do not stop.”`,
`“Everything you’ve ever wanted is on the other side of fear.”`,
`“Pain is temporary. Quitting lasts forever.”`,
`“A problem is a chance for you to do your best.”`,
`“Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed.”`,
`“It’s not about perfect. It’s about effort.”`,
`“Believe you can and you’re halfway there.”`,
`“Difficult roads always lead to beautiful destinations.”`,
`“Your time is limited, so don’t waste it living someone else’s life.”`,
`“Perseverance is failing 19 times and succeeding the 20th.”`,
`“Goals may give focus, but dreams give power.”`,
`“You cannot fail at being yourself.”`,
`“You cannot fail at being yourself.”`,
`“If you cannot do great things, do small things in a great way.”`,
`“When you know what you want, and want it bad enough, you’ll find a way to get it.”`];
 var randNumber = Math.floor(Math.random()*(quotes.length));
 document.getElementById("display-quotes").innerHTML = quotes[randNumber];
};

//Add a quote
function newQuote(){
    const addedQuote = document.getElementById("insertquote").value;
    document.getElementById("display-quotes").innerHTML = `"${addedQuote}"`;
};

//Delete field text

function deleteText(){

    if(document.getElementById("insertquote").value !== ""){
        document.getElementById("insertquote").value="";}
    else {document.getElementById("insertquote").value=" ";
    } 
};
