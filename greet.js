// howFn should be a function that returns a string
function sayHello(howFun, toWhom){
    const salutation = howFun(toWhom);
    console.log(`${salutation}!, I am happy to meet you `);
}

module.exports = sayHello; // Assign the sayHello function as the export
//assign the function as the values