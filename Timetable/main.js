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
  var timetable = ["You're not at school today.. or at least you shouldn't be...","You start the day with Maths," + "<br><br>" + "Then for second period you move onto Maths," + "<br><br>" + "Thirdly, you have Maths," + "<br><br>" + "Then, just before lunch you have Maths," + "<br><br>" + "And finally, after lunch, to finish off the day you have Maths", "You start the day with Maths," + "<br><br>" + "Then for second period you move onto Maths," + "<br><br>" + "Thirdly, you have Maths," + "<br><br>" + "Then, just before lunch you have Maths," + "<br><br>" + "And finally, after lunch, to finish off the day you have Maths"];
  var timetable = timetable[1];
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

dotw();
checkTime();
startTime();
