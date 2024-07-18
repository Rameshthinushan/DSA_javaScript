let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Mutation Methods -----------------------------------

//push
myArray.push(11)  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//pop (last element remove)
myArray.pop(); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//shift(remove the element in first)
myArray.shift(); //[2, 3, 4, 5, 6, 7, 8, 9, 10]

//unshift(Add the two elements in start index)
myArray.unshift(-1, 0); //[-1, 0, 2, 3, 4,5, 6, 7, 8, 9,10]

//splice remove the first 5 elements array (-1 to 4)
myArray.splice(5); //[ -1, 0, 2, 3, 4 ]

// sort order the array in spify order 0 - 10 and A- Z
myArray.sort(); //[ -1, 0, 2, 3, 4 ]

//print the array in reverse order
myArray.reverse(); //[ 4, 3, 2, 0, -1 ]

//array.copyWithin(target, start, end) *
myArray.copyWithin(2,0,2); //[ 4, 3, 4, 3, -1 ]

//fill all same element
//myArray.fill(10); //[ 10, 10, 10, 10, 10 ]

// --------------------------------------------------------

//Access Methods-------------------------------------------

// concat connect the two arrays 
// let concate = myArray.concat([100, 200, 300]); //[4, 3, 4, 3, -1, 100, 200, 300]
// console.log(concate);

// slice
// let slice = myArray.slice(1, 3); //[ 3, 4 ]
// console.log(slice)

// includes
// console.log(myArray.includes(4)); //return true

// `indexof` my array is [ 4, 3, 4, 3, -1 ] two `4` are there but this function gets first `4`
// console.log(myArray.indexOf(4));

// `lastIndexOf` my array is [ 4, 3, 4, 3, -1 ] tow `4` this function gets second `4`
// console.log(myArray.lastIndexOf(4))

// join() returns an array as a string
// console.log(myArray.join());