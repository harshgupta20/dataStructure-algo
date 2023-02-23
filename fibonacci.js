console.log("Working!");

// Taking user input
let userInput = 10000;
// function to get fabonacci number
checkFabo(userInput);



function checkFabo(userInput) {
    // created array to list Number
    let arr = [0,1];
    if (userInput <= 0) {
        console.warn("Kindly enter any positive whole number!!!");
    }else {
        let start = 0;
        let end = 1;
        for (let i = 1; i < userInput-1; i++) {
            let temp;
            temp=end;
            end=end+start;
            start=temp;

            // Adding the value into the array
            arr.push(end);
        }

        console.log("Fibonacci number at position " + "\"" + userInput+ "\" is " +end);
        console.log(arr);
    }
}
