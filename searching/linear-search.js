console.log("working");

let userInput = 2;
let array = [1,6,3,5,0,9,2];

console.log(checkElement(userInput, array));

function checkElement(userInput, array){
    for(let i=0; i<array.length;i++){
        if(userInput == array[i]){
            return "Userinput is : "+userInput+", found inside array on index : "+i;
        }
    }
    return "Userinput is : "+userInput+", not found inside array on any index";
}