/*
How JS handles asynchronous events placed in Event Queue
 demonstrates event loop in JS
    1. JS is single threaded and synchronous
    2. Event loop keeps a tab of all events, browser adds the click event to the event queue.
    3. once the execution context is empty, JS engine then processes Event Queue eventshandlers

*/

//simulate long running operation

function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}
function clickHandler(){
    console.log('click event!');
}

//listen to the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');