var moment = require( 'moment');

// var getCurrentDate = function (){
//     // var wrapped = moment(new Date());
//     var wrapped = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
//     console.log(wrapped);
// }

let getCurrentDate = () => {
    var wrapped = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
    console.log(wrapped);
}

getCurrentDate();
