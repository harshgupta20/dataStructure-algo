console.log("working");

let userInput=4;

console.log(checkFib(userInput));


function checkFib(userInput){
    if(userInput<2){
        return userInput;
    }
    return checkFib(userInput-1) + checkFib(userInput-2);
}