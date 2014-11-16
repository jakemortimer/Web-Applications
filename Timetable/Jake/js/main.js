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
  var timetable = ["You shouldn't be at school today..", "If it is Week 1 then : <br /><br /> Firstly, you should have Maths. <br /><br /> Then, you have Computing. <br /><br /> After that, you have ICT. <br /><br /> Just before lunch you have Physics. <br /><br /> Lastly, you have English. <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have Maths. <br /><br /> Then, you have English. <br /><br /> After that, you have Chemistry. <br /><br /> Just before lunch you have PE. <br /><br /> Lastly, you have Biology.",
  "If it is Week 1 then : <br /><br /> Firstly, you should have History. <br /><br /> Then, you have French. <br /><br /> After that, you have Biology. <br /><br /> Just before lunch you have English. <br /><br /> Lastly, you have Maths. <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have History. <br /><br /> Then, you have Chemistry. <br /><br /> After that, you have Maths. <br /><br /> Just before lunch you have English. <br /><br /> Lastly, you have Biology.", "If it is Week 1 then : <br /><br /> Firstly, you should have History. <br /><br /> Then, you have History. <br /><br /> After that, you have Physics. <br /><br /> Just before lunch you have Chemistry. <br /><br /> Lastly, you have ICT. <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have Physics. <br /><br /> Then, you have English. <br /><br /> After that, you have Chemistry. <br /><br /> Just before lunch you have Chemistry. <br /><br /> Lastly, you have PE.",
  "If it is Week 1 then : <br /><br /> Firstly, you should have Maths. <br /><br /> Then, you have Science. <br /><br /> After that, you have French. <br /><br /> Just before lunch you have French. <br /><br /> Lastly, you have Computing. <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have Physics. <br /><br /> Then, you have ICT. <br /><br /> After that, you have Computing. <br /><br /> Just before lunch you have Computing. <br /><br /> Lastly, you have French.", "If it is Week 1 then : <br /><br /> Firstly, you should have Biology. <br /><br /> Then, you have English. <br /><br /> After that, you have French. <br /><br /> Just before lunch you have Maths. <br /><br /> Lastly, you have ICT. <br /><br /> If it is Week 2 then: <br /><br /> Firstly, you should have Maths. <br /><br /> Then, you have History. <br /><br /> After that, you have English. <br /><br /> Just before lunch you have Biology. <br /><br /> Lastly, you have Computing.", "You shouldn't be at school today..."];
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

$(function(){   
    $("#greeting").hide().fadeIn(1000);
    $("#dotw").hide().fadeIn(3000);
    $("#time").hide().fadeIn(5000);
    $("#timetable").hide().fadeIn(7000);
});

$(function(){   
  greet();
  dotw();
  checkTime();
  startTime();
});
