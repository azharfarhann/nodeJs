// SYNC vs ASYNC in JavaScript
//Synchronous 
// Asynchronous 


/*
Synchronous 
1.It works line by line and block the code , blocking 
2.all simple opertations like console.log and math operations
3.order is predictable
4.Quick operations

*/



/*
Asynchronous 
1.Delegated to run later, non-blocking 
2.setTimeout, fetch, Promises, async/await, setInterval
3.Callback/event-driven or Promise-based
4.Time-consuming tasks (API calls, file reading, etc)


*/

// List of all async
// Timers 
/*
1.setTimeout
2.setInterval

*/
//Network & APIs
/*
1.fetch()
2.axios()
3.websocket()

*/

// Promises and related
/*
new Promise()

.then(), .catch(), .finally()

async/await

Promise.resolve(), Promise.reject(), Promise.all(),


*/

// console.log("1")
// console.log("2")
// console.log("3")


console.log("1")

setTimeout(() => {
    console.log("2")
}, 1000)

console.log("3")

setTimeout(() => {
    console.log("4")
}, 1000)

// JS Works like
// first print all sync code 
// then async one

