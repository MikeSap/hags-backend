<h1>New sandwich in...</h1>
<div id="clockdiv">
  <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>

<script>
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function getDropDate() {
   var now = new Date();
   var dropDate = new Date();
   dropDate.setDate(now.getDate() + ( now.getDay() + 7) % 7 + 1);
   dropDate.setHours(16, 0, 0, 0);
   return dropDate;
}

function convertToCST(date){
    estOffset = -6.0
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * estOffset));
}

var deadline = getDropDate();
initializeClock('clockdiv', convertToCST(deadline));
</script>

<style>
body{
	text-align: center;
  font-family: sans-serif;
  font-weight: 100;
}

h1{
  color: #396;
  font-weight: 100;
  font-size: 40px;
  margin: 40px 0px 20px;
}

#clockdiv{
	font-family: sans-serif;
	color: white;
	display: inline-block;
	font-weight: 100;
	text-align: center;
	font-size: 30px;
}

#clockdiv > div{
	padding: 10px;
	border-radius: 3px;
	background: #EC6D48;
	display: inline-block;
}

#clockdiv div > span{
	padding: 15px;
    color: white;
	border-radius: 3px;
	display: inline-block;
}

.smalltext{
	padding-top: 5px;
	font-size: 16px;
}
</style>
