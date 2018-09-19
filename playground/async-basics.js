console.log('Starting app');


//we are registering the event for firing this console message after 2 seconds
setTimeout(() => {
console.log('Inside of callback')
},2000);

console.log('Finishing app')