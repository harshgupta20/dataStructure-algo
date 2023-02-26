console.log("working!");

let arr = [8,20,-2,4,-6];

console.log(quickSort(arr));

function quickSort(arr){
    let pivot = arr[arr.length-1]
    let left = [];
    let right = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push();
        }
    }

    return [...quickSort(left), pivot , ...quickSort(right)];
}