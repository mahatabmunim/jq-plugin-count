// jq start
$(document).ready(function(){
    // counterUp start 
  

    $(".count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 4000,
              easing: "swing",
              step: function (now) {
                now = Number(Math.ceil(now)).toLocaleString('en');
                                      $(this).text(now);
              },
            }
          );
      });

// coding
$(function(){

  $(".num").numScroll({
    number: 123456
  });

});

$(".num").numScroll({
  'time': 1500,
  'delay': 0
});
$(".num").numScroll({
  'symbol': true
});
$(".num").numScroll({
  'symbol': true
});
$(".num").numScroll({
  'fromZero': true
});












})

// js start
var countdown = $("#countdown").countdown360({
  radius      : 60,
  seconds     : 100,
  fontColor   : '#FFFFFF',
  autostart   : false,
  onComplete  : function () { console.log('done') }
});
countdown.start();
var countdown = $("#countdown").countdown360({
  radius: 15.5,
  strokeStyle: "#477050",
  strokeWidth: undefined,
  fillStyle: "#8ac575",
  fontColor: "#477050", 
  fontFamily: "sans-serif",
  fontSize: undefined,
  fontWeight: 700,
  autostart: true,
  seconds: 10,
  label: ["second", "seconds"],
  startOverAfterAdding: true, 
  smooth: false,
  onComplete: function () {}
});
// start the countdown
countdown.start();

// stop the countdown
countdown.stop();

// extends the current timer by backing up by the number of seconds provided
countdown.extendTimer(secs);

// adds additional seconds to the original timer and restarts if startOverAfterAdding is true
countdown.addSeconds(secs);













