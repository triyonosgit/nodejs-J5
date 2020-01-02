var five = require('johnny-five');
const board = new five.Board({ port: "COM7" });

board.on('ready', function() {
    this.repl.inject(
        {
            relay: new five.Relay({
                pin: 12,
                type: "NC"
            });
        }
    );
});
