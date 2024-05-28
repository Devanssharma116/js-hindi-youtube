// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     // without IIFE
//     console.log(`DB CONNECTED`);
// }
// chai();

// (function chai(){
//     // with IIFE, it is named iife kyuki function ka name he
//     console.log(`DB CONNECTED`);
// })
// ();// why use iife--> globel scope ke polution se problem hoti he kai bar to usko hatane ke liye iife use hota he... and imidiately koi function call karna ho to

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )
('hitesh');

