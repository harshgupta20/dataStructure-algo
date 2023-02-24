console.log("working !");

let userInput = 8;

console.log(checkPowerOfTwo(userInput));


function checkPowerOfTwo(userInput){
    while(userInput>=1){
        if(userInput%2==0){
            userInput=userInput/2;
        }else if(userInput==1){
            return "Power of Two";
        }else{
            return "Not a power of Two";
        }
    }
    // return "Power of two";
}