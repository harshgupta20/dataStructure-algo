console.log("working");

let userInput = 1;
let array = [2,3,5,6,7,8,9];

console.log(checkNum(userInput, array));

function checkNum(userInput, array){
    
    let start = 0;
    let end = array.length-1;
    let mid = (end - start)/2; 

    while(start<=end && start<0){
        if(userInput < array[mid]){
            console.log("uper"+mid);
            end = mid+1;
            mid = (end+start)/2;
        }
        else if(userInput>array[mid]){
            console.log("niche"+mid);
            start = mid+1;
            mid=(end+start)/2;
        }
        else{
            return "Element found on index : "+mid;
        }
    }
    return "Not Found ";
}
