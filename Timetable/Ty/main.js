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
    var timetable = ["You shouldn't be at school today..",
  //Monday
  "Firstly, you should have Maths. <br /><br /> Then, just before break you have Chemistry. <br /><br /> After that, you have French. <br /><br />  After that you have French again. <br /><br /> Before lunch you have English. <br /><br /> After lunch you have English again <br /><br /> Finally you have Chemistry",
  //Tuesday
  "Firstly, you should have Physics. <br /><br /> Then, just before break you have Physics. <br /><br /> After that, you have Computing. <br /><br />  After that you have History. <br /><br /> Before lunch you have Maths. <br /><br /> After lunch you have Maths again <br /><br /> Finally you have English",
  //Wednesday
  "Firstly, you should have English. <br /><br /> Then, just before break you have Biology. <br /><br /> After that, you have English. <br /><br />  After that you have Computing. <br /><br /> Before lunch you have Business. <br /><br /> After lunch you have Maths <br /><br /> Finally you have Study",
  //Thursday
  "Firstly, you should have Biology. <br /><br /> Then, just before break you have Maths. <br /><br /> After that, you have Maths again. <br /><br />  After that you have Biology. <br /><br /> Before lunch you have English. <br /><br /> After lunch you have English again. <br /><br /> Finally you have French",
  //Friday
  "Firstly, you should have Business. <br /><br /> Then, just before break you have Business again. <br /><br /> After that, you have PE. <br /><br />  Before lunch you have PE again. <br /><br /> Finally you have History",
  "You shouldn't be at school today..."];
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
        greeting = "Good morning, Mr. Mason";
    } else if (h < 16) {
        greeting = "Good day, Mr. Mason";
    } else if (h < 22){
        greeting = "Good evening, Mr. Mason";
    } else {
      greeting = "You should be getting to sleep now, Mr Mason";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

greet();
dotw();
checkTime();
startTime();
