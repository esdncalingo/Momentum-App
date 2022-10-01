
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
  const greeting = document.getElementById('greet');

  //12-hour format and greeting
  if (hr <12) {
    cf = "AM";
    greeting.innerHTML = "Good Morning,"+ ' ';
  }
  if (hr >=12 && hr <=17) {
    greeting.innerHTML = "Good Afternoon,"+ ' ';
  }
  if (hr >17) {
    greeting.innerHTML = 'Good evening,' + ' ';
  }
  if (hr >12) {
    hr = hr - 12;
  }
  //force AM on 12 midnight
  if (hr == 0) {
    hr = 12;
    cf = "AM";
    greeting.innerHTML = "Good Morning,"+ ' ';
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
//update the html body every 100 msecond
function initClock(){
  updateClock();
  window.setInterval("updateClock()", 100)
}

//greeting with name and mainfocus
const editName = document.querySelector('.editname');
const userName = document.getElementById('username');

//press edit button
editName.addEventListener('click', () => {
  userName.setAttribute('contenteditable', 'true');
})

  //press enter effect on username
  userName.addEventListener('keypress', function onEnter(event) {
    if(event.key === 'Enter') {
      if(userName.innerHTML == 0) {
        userName.innerHTML = `${localStorage.getItem('newname')}`;
      }
      localStorage.setItem('newname', `${userName.innerHTML}`)
      userName.setAttribute('contenteditable', 'false');
      userName.innerHTML = `${localStorage.getItem('newname')}`;
    }
  })
  
  //maintain stored username on refresh
  function maintainUserName() {
    if(userName.innerHTML) {
      userName.innerHTML = localStorage.getItem('newname');
    }
    if(localStorage.getItem('newname') == 0) {
      localStorage.setItem('newname', 'blank');
      userName.innerHTML = localStorage.getItem('newname');
    }
  }
  maintainUserName();
//when leaving the name input
userName.addEventListener('blur', () => {
  userName.innerHTML = localStorage.getItem('newname');
})

//mainfocus
const mainTaskInput = document.querySelector('.maintask');
const newTask = document.querySelector('.newtask');
const newTaskContainer = document.querySelector('.newtask-container');

//mainfocus enter event
mainTaskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
      if(mainTaskInput.value) {
        newTask.innerHTML = mainTaskInput.value;
        localStorage.setItem('newtask', `${newTask.innerHTML}`);
        mainTaskInput.classList.add('hidden');
        newTaskContainer.classList.add('active');
      }
    }
})

//maintain data when refreshed
function maintainTask() {
  if(localStorage.getItem('newtask')) {
    newTask.innerHTML = localStorage.getItem('newtask');
    mainTaskInput.classList.add('hidden');
    newTaskContainer.classList.add('active');
  }
}
maintainTask();

//editing task
const editTask = document.querySelector('.edittask');

editTask.addEventListener('click', () => {
  mainTaskInput.classList.remove('hidden');
  newTaskContainer.classList.remove('active');
  localStorage.removeItem('newtask');
})

//todo main click

const todoMain = document.querySelector('.todo-button');
const todoToggle = document.querySelector('.todo-popup');

todoMain.addEventListener('click', () => {
    todoToggle.classList.toggle('active');
})