console.log("working");


// let array = [10,1,7,4,8,2,11];
let array = [1,2,3,4,5,6,7];

let bigOh = 0;
let arraySorted = insertionSort(array);
console.log(arraySorted);



function insertionSort(arr){
    for(let i=1; i<arr.length;i++){
        bigOh++;
        let tempNum = arr[i];
        for(let j=i-1; j>=0; j--){
            bigOh++;
            if(arr[j] > tempNum){
                arr[j+1] = arr[j];
                arr[j]=tempNum;
            }else{
                break;
            }
        }
    }

    console.log("BigOh :" +bigOh)
    return arr;
}