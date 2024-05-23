// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const a=Symbol('dummy data')
// console.log(typeof mysym); undefined
const JsUser = {
    name: "Hitesh", // system name ko defaultly string me hi leta he
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    a:'second dummy data',//  isko symbol ki tarah use karne ke liye brakets me likhna padta he ok..
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // is value ko dot se execute nahi kar sakta 
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]);

// console.log(JsUser.a);
// console.log(typeof JsUser.a);

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user2, ${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());