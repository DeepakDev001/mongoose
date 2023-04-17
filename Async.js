// in Asynchronous , secound task do not wait the finish first task.

// suppose that :-

console.log("start execution ...... ")

setTimeout(() => {
    console.log('logical execution .......')
}, 2000)

console.log("complete execution ......")

// we undersatnd drawbacks of Asynchronous ,lets see the example.

let a = 10;
let b = 0;
setTimeout(() => {
    b = 20;

}, 2000)
console.log(a + b)

// in that situation output will be come only 10 bec Asynchronous , first task do not wait the finish secound task.

// Then how to handle Asynchronous Data ?

// they are the two methord 
// 1)- CallBack :->> it is a old way to handle Asynchronous Data
// 2)- Promise :->> it is a new way to handle Asynchronous Data

// now solved the drawback

let num1 = 10;
let num2 = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(50)
    }, 4000)

})

waitingData.then((data) => {
    num2 = data;
    console.log(num1 + num2);
})


// Note ->> In the case of api featch not need the promise methord. because featch function all ready  internely use promise.

// 2)->> In the custom condition we need make promise .



