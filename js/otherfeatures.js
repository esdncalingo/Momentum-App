
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


//Switch to General

function changeGeneral(){
    var general = document.getElementById('settings-gen');
    var weather = document.querySelector('.show-weather');
    var clock = document.querySelector('.show-clock');
    var greetings = document.querySelector('.show-greetings');
    var checkbox = document.querySelector('.greetings-checkbox');
    var settingsCustom = document.querySelector('.setting-custom');
    var settingsShow = document.querySelector('#settings-show');
    

    general.innerText = "General";
    weather.innerText = "Weather";
    clock.innerText = "Clock";
    settingsCustom.innerHTML = "Customize your dashboard";

    greetings.style.display="block";
    checkbox.style.display = "block";
    settingsShow.style.display = "block";

    weather.style.paddingTop = "3px";
    weather.style.paddingRight = "0px";

   

};

//Switch to Mantras

function changeMantras() {
    var general = document.getElementById('settings-gen');
    var weather = document.querySelector('.show-weather');
    var clock = document.querySelector('.show-clock');
    var greetings = document.querySelector('.show-greetings');
    var checkbox = document.querySelector('.greetings-checkbox');
    var settingsCustom = document.querySelector('.setting-custom');
    var settingsShow = document.querySelector('#settings-show');
    var settingsToggle = document.querySelector('.settings-toggle');
    
    
    general.innerText = "Mantras";
    weather.innerText = "Add";
    clock.innerText = "Auto Display";
    settingsCustom.innerHTML = "Add your mantra today!";


    greetings.style.display = "none";
    checkbox.style.display = "none";
    settingsShow.style.display = "none";


    weather.style.paddingTop = "50px";
    weather.style.paddingRight = "100px";
    weather.style.marginRight = "53px";
    

    
};


    



