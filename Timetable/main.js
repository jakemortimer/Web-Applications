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


  var user = new Array(100);
  user[1] = "Jake Mortimer";
  document.getElementById("dotw").innerHTML = "Who is this?";
  document.getElementById("timetable").innerHTML = "mmhmm.. this guy looks suspicious.";
  var name = document.getElementById("b4").innerHTML
  if name == "Jake Mortimer"{

  }



  var day = weekday[d.getDay()];
  document.getElementById("dotw").innerHTML = day;
  var timetable = ["Computing, Computing, Computing, Computing, Computing","Maths, Maths, Maths, Maths, Maths", "English, English, English, English, English", "History, History, History, History, History", "French, French, French, French, French", "You're not at school today.. or at least you shouldn't be...", "You're not at school today.. or at least you shouldn't be..."];
  var timetable = timetable[d.getDay()];
  document.getElementById("timetable").innerHTML = timetable;
}

dotw();
