// var five = require('johnny-five');
// const board = new five.Board({ port: "COM19" });
// // var board = new five.Board();
//
// board.on('ready', function() {
//     var led = new five.Led(11); // pin 13
//     // led.blink(500); // 500ms interval
//
//     // led.on();
//     //
//     // setTimeout(function() {
//     //     led.off();
//     // }, 3000);
//
//     this.repl.inject({
//         redLed: led
//     });
// });


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
