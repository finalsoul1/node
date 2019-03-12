var events = require('events');

var eventEmitter = new events.EventEmitter();

// eventEmitter.on('eventName', eventHandler);

var connectHandler = function connected() {
    console.log("Connection Successful");

    // data_recevied 이벤트 발생
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
    console.log('data received');
})

eventEmitter.emit('connection');

console.log("Program has ended");
