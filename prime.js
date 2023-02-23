console.log("working");

let userInput = 635;

console.log(PrimeFunc(userInput));

function PrimeFunc(userInput) {
    if (userInput <= 0) {
        return "Kindly enter positive whole number";
    }
    else if (userInput == 1 || userInput == 2) {
        return "Number is Prime";
    }
    else {
        for (let i = 3; i < userInput / 2; i++) {
            if (userInput % i == 0) {
                return false;
            }
        }
        return true;
    }
}