const say = require('say');

function sorryDave(callback) {  
    callback(say.speak("I'm sorry, Dave"));
}

sorryDave();