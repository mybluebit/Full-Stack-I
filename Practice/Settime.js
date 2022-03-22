var timer;

const timeOut=() => {
    timer = setTimeout((){
        console.log("This timer will be stopees")
    }, 3000);
}

const alertFunc=()=> {
    console.log('clear time...');
    clearTimeout(timer)
}

setTimeout(CalenderComponent,0);
timeOut();
stopTimer();
