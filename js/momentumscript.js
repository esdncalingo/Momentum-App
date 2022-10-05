
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
    greeting.innerHTML = "Good Morning,"+ `&nbsp;`;
  }
  if (hr >=12 && hr <=17) {
    greeting.innerHTML = "Good Afternoon,"+ `&nbsp;`;
  }
  if (hr >17) {
    greeting.innerHTML = 'Good evening,' + `&nbsp;`;
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
  userName.style.borderBottom = '2px solid #fff';
})

//press enter effect on username
userName.style.outline = 'none';
userName.addEventListener('keypress', function onEnter(event) {
  if(event.key === 'Enter') {
    if(userName.innerHTML == 0) {
      userName.innerHTML = `${localStorage.getItem('newname')}`;
    }
    userName.style.borderBottom = 'none';
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
  if(localStorage.getItem('newname') == null) {
    localStorage.setItem('newname', 'set name');
    userName.innerHTML = localStorage.getItem('newname');
  }
}
maintainUserName();
//when leaving the name input
userName.addEventListener('blur', () => {
userName.innerHTML = localStorage.getItem('newname');
userName.setAttribute('contenteditable', 'false');
userName.style.borderBottom = 'none';
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
//keep value on the underline even when refreshed
mainTaskInput.value = localStorage.getItem('newtask');

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
})

//checkbox and line-through save and load if checked
var checkbox = document.getElementById("hide-task");
function save() {	
    localStorage.setItem("main-task-checkbox", checkbox.checked);	
}

var checked = JSON.parse(localStorage.getItem("main-task-checkbox"));
    checkbox.checked = checked;
    if(checkbox.checked) {
      checkbox.style.opacity = '1';
      newTask.classList.add('complete');
    } else {
      newTask.classList.remove('complete');
    }

//mainfocus checkox
checkbox.addEventListener('change', function(e){
  if(checkbox.checked) {
    newTask.classList.add('complete');
  } else {
    newTask.classList.remove('complete');
  }
})

//mouse-over mouse-out of name, date, and mainfocus options
const editTime = document.getElementsByClassName('icon-ellipsis')[0];
const nameMouse = document.querySelector('.greeting-wrapper');
const timeMouse = document.querySelector('.time');
const mainFocusMouse = document.querySelector('.mainfocus-container')

nameMouse.addEventListener('mouseover', nameMouseOver);
nameMouse.addEventListener('mouseout', nameMouseOut);
timeMouse.addEventListener('mouseover', timeMouseOver);
timeMouse.addEventListener('mouseout', timeMouseOut);
mainFocusMouse.addEventListener('mouseover', mainFocusMouseOver);
mainFocusMouse.addEventListener('mouseout', mainFocusMouseOut);
function nameMouseOver() {
  editName.style.opacity = '1';
}
function nameMouseOut() {
  editName.style.opacity = '0'
}
function timeMouseOver() {
  editTime.style.opacity = '1';
}
function timeMouseOut() {
  editTime.style.opacity = '0';
}
function mainFocusMouseOver() {
  checkbox.style.opacity = '1';
  editTask.style.opacity = '1';
}
function mainFocusMouseOut() {
  if(!checkbox.checked) {
    checkbox.style.opacity = '0';
  }
  editTask.style.opacity = '0';
}