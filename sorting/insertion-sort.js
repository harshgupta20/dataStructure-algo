console.log("working");


let array = [10,1,7,4,8,2,11];

let arraySorted = insertionSort(array);

console.log(arraySorted);



function insertionSort(arr){
    for(let i=1; i<arr.length;i++){
        let tempNum = arr[i];
        for(let j=i-1; j>=0; j--){
            if(arr[j] > tempNum){
                arr[j+1] = arr[j];
                arr[j]=tempNum;
            }else{
                break;
            }
        }
    }

    return arr;
}











// function insertionSort(arr){
//     for(let i=arr.length-1; i>=1; i++){
//         for(let j=0; j<=arr.length-i; j++){
//             if(arr[j]>arr[j+1]){

//             }
//         }
//     }
// }