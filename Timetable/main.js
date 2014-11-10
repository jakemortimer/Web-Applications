function dotw(){
  var d = new Date();
  var weekday = new Array(7);
  weekday[0]=  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[d.getDay()];
  document.getElementById("dotw").innerHTML = "Today is " + "<u>" + day + "</u>";
  var timetable = ["You shouldn't be at school today..", "If it is Week 1 then : <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... . <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... .",
  "If it is Week 1 then : <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... . <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... .", "If it is Week 1 then : <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... . <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... .",
  "If it is Week 1 then : <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... . <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... .", "If it is Week 1 then : <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... . <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have ... . <br /><br /> Then, you have ... . <br /><br /> After that you have ... . <br /><br /> Just before lunch you have ... . <br /><br /> Lastly you have ... .", "You shouldn't be at school today..."];
  var timetable = timetable[d.getDay()];
  document.getElementById("timetable").innerHTML = timetable;

}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = "The current time in Great Britain is " + "<u>"+ h+":"+m+":"+s + "</u>" + ".";
    var t = setTimeout(function(){startTime()},500);

}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function greet(){
  var today=new Date();
  var h=today.getHours();
  var greeting;
    if (h < 10) {
        greeting = "Good morning, Mr. Mortimer";
    } else if (h < 16) {
        greeting = "Good day, Mr. Mortimer";
    } else {
        greeting = "Good evening, Mr. Mortimer";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

greet();
dotw();
checkTime();
startTime();
