// let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 300 iognore var in use
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); error
}

// console.log(username); error because out of its range(scope)


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}
console.log(addone(5))


// console.log(addTwo(5)) throws error 
const addTwo = function(num){
    return num + 2

}
// console.log(addTwo(5))
