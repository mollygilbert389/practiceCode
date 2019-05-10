//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {

    //  Click events are done for us:
    $("#lap").click(stopwatch.recordLap);
    $("#stop").click(stopwatch.stop);
    $("#reset").click(stopwatch.reset);
    $("#start").click(stopwatch.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  //  Our stopwatch object.
  var stopwatch = {
  
    time: 0,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 0;
      stopwatch.lap = 1;
  
      $("#display").text("00:00")
      $("#laps").text("")
  
    },
  
    start: function() {
      if (!clockRunning) {
        intervalID = setInterval(stopwatch.count, 1000)
        clockRunning = true;
      }
  
    },
    stop: function() {
        clearInterval(intervalID)
        clockRunning = false
    },
  
    recordLap: function() {
        var converted = stopwatch.timeConverter(stopwatch.time)
        $("#laps").append('<p>Lap ' + stopwatch.lap + ' : ' + converted + '<p>')
        stopwatch.lap++
    },
    count: function() {
        stopwatch.time++
        var converted = stopwatch.timeConverter(stopwatch.time)
        console.log(converted)
        $("#display").text(converted)
  
    },
  
    timeConverter: function(t) {
  
      //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
  
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };
  

