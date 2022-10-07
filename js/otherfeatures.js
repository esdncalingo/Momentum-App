
//settings main click

const settingsMain = document.querySelector('.settings-img');
const settingsToggle = document.querySelector('.settings-popup');

settingsMain.addEventListener('click', () => {
    settingsToggle.classList.toggle("active");
})

//Add a quote button click

function insertQuote(){
var insertQuote = document.querySelector('.insertquote-popup');
    insertQuote.style.display="block";
}


//Cancel add a quote button click

function cancelBtn(){
const quotePopup = document.querySelector('.insertquote-popup');
quotePopup.style.display = "none";

}

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
}
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
        var autodisplay = document.querySelector('.show-autodisplay');
        var checkbox = document.querySelector('.autodisplay-checkbox');
        var checkboxTwo = document.querySelector('.clock-checkbox');
        var checkboxThree = document.querySelector('.weather-checkbox');
        var settingsCustom = document.querySelector('.setting-custom');
        var settingsShow = document.querySelector('#settings-show');

        
        
        general.innerText = "General";
        settingsCustom.innerHTML = "Customize your dashboard";
        settingsShow.style.display = "block";
    
    
        weather.style.display = "block";
        checkboxThree.style.display = "block";
        clock.style.display = "block";
        checkboxTwo.style.display = "block";

        autodisplay.style.display="none";
        checkbox.style.display="none";

        
    };
    

//Switch to Mantras

function changeMantras() {
    var general = document.getElementById('settings-gen');
    var weather = document.querySelector('.show-weather');
    var clock = document.querySelector('.show-clock');
    var autodisplay = document.querySelector('.show-autodisplay');
    var checkbox = document.querySelector('.autodisplay-checkbox');
    var checkboxTwo = document.querySelector('.clock-checkbox');
    var checkboxThree = document.querySelector('.weather-checkbox');
    var settingsCustom = document.querySelector('.setting-custom');
    var settingsShow = document.querySelector('#settings-show');

    
    
    general.innerText = "Mantras";
    settingsCustom.innerHTML = "Add your mantra today!";


    autodisplay.style.display = "block";
    checkbox.style.display="block";

    weather.style.display = "none";
    checkboxThree.style.display = "none";
    clock.style.display = "none";
    checkboxTwo.style.display = "none";
    settingsShow.style.display = "none";


    autodisplay.style.paddingTop = "50px";
    autodisplay.style.marginRight = "91px";
};

//Toggle autodisplay
 
function switchOn(){
    
    if (document.getElementById('autodisplay').checked === false)
   {document.getElementById("display-quotes").innerHTML = ""};

    if(document.getElementById('autodisplay').checked === true){
        randomQuote()
    };

}

//Toggle date

function switchDate(){
    var date = document.querySelector('.date');

    if(document.getElementById('showdate').checked === true){
        date.style.display = "block"}
    else (date.style.display = "none");

};


//Toggle time

function switchTime(){
    var time = document.querySelector('.time');

    if(document.getElementById('showclock').checked === true){
        time.style.display = "flex"}
    else {time.style.display = "none"};

};
