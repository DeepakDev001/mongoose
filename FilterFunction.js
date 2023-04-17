// suppose we find the specific value of the given Array-> with the help of filter
// filter always use on array.
// filter works on loops.

const arr = [2, 3, 4, 5, 7, 2, 2, 2, 3, 3]
arr.filter((item) => {
    console.log(item)
})


// Condition suppose -> i need the all repetition value in the given array like 2

let results = arr.filter((items) => {
    return (
        items === 2
    )
})
console.log(results)

// Condition suppose -> i need the all repetition value in the given array.

let results1 = arr.filter((items) => {
    return (
        items === 2 || items === 3
    )
})
console.log(results1)

// note -> we can perfome any condtions