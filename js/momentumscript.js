
//date and time
function updateClock() {
  var now = new Date();
  var dname = now.getDay();
  var mo = now.getMonth();
  var dnum = now.getDate();
  var yr = now.getFullYear();
  var hr = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var cf = "PM";

  //12-hour format
  if (hr <12) {
    cf = "AM";
  }
  if (hr >12) {
    hr = hr - 12;
  }
  if (hr == 0) {
    hr = 12;
    cf = "AM";
  }

  Number.prototype.pad = function(digits) {
    for(var n = this.toString(); n.length<digits; n = 0+n);
    return n;
  }

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ids = ["dayname", "month", "daynum", "year", "hours", "minutes", "seconds", "clock-format"];
  var values = [days[dname], months[mo], dnum.pad(2), yr, hr.pad(2), min.pad(2), sec.pad(2), cf];
  for (let i=0; i<ids.length;i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}
//update the html body every 1 second
function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1)
}

//ellipsis dropdown

const openDropdown = document.getElementsByClassName('option-button')[1];
const dropdown = document.querySelector('.todo-option-dropdown');

openDropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  })
//todo main click

const todoMain = document.querySelector('.todo-button');
const todoToggle = document.querySelector('.todo-popup');

todoMain.addEventListener('click', () => {
    todoToggle.classList.toggle('active');
})

//settings main click

const settingsMain = document.querySelector('.settings-img');
const settingsToggle = document.querySelector('.settings-popup');

settingsMain.addEventListener('click', () => {
    settingsToggle.classList.toggle('active');
})

//for checking
console.log(openDropdown);
console.log(todoMain);

//QuoteGenerator
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

