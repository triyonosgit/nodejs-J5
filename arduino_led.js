


var five = require('johnny-five');
const board = new five.Board({ port: "COM19" });

board.on("ready", () => {
  const led = new five.Led(11);

  led.fadeIn();
  

  // Toggle the led after 5 seconds (shown in ms)
  board.wait(5000, () => {
    led.fadeOut();
  });
});
