function enableCountdown() {
  var LABEL_FONT_SIZE = 22;
  var COUNTDOWN_FONT_SIZE = 30;
  $('#countdown-to-xmas-label').css({
    fontSize: LABEL_FONT_SIZE,
  });
  $('#countdown-to-xmas-label').text('Countdown to Xmas!!');
  $('#countdown-to-xmas').timeTo({
    timeTo: new Date(2018, 11, 25, 0, 0, 0, 0),
    displayDays: "auto",
    theme: "red",
    fontSize: COUNTDOWN_FONT_SIZE,
  });
}
enableCountdown();
