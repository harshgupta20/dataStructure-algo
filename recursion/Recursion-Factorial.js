console.log("Working");

let userInput = 5;

// callFact(userInput);
console.log(callFact(userInput));



function callFact(userInput){
    if(userInput<=1){
        return 1;
    }
    console.log(userInput);
    return userInput*callFact(userInput-1);
}