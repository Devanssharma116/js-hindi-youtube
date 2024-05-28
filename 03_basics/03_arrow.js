const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// in node this value is {} empty set but in browser its v alue is window

// function chai(){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);// undefiend because object ke under hi kaam karega
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);

// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // type 2 errow function implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})
// const addTwo = (num1, num2) => {
//     return {username: "hitesh"}
// } this is also valid


// console.log(addTwo(3, 4))