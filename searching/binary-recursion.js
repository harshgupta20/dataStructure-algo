console.log("working!");
let userInput = 8;
let array = [2,3,5,6,7,8,9];
let start=0;
let end=array.length-1;
let mid = (start+end)/2;
console.log(checkNum(start,end,mid));
function checkNum(start, end, mid){
    if(start<=end){
        if(array[mid]<userInput){
            return checkNum(start=mid+1, end, mid=(start+end)/2);
        }else if(array[mid]>userInput){
            return checkNum(start, end=mid-1, mid=(start+end)/2);
        }
        return "Found at : "+ mid ;
    }
    return "Not Found";
}