console.log("working");

let array = [1,2,3,4,65];

let arraySorted = bubbleSort(array);

console.log(arraySorted);



function bubbleSort(arr){
    for(let i=0; i<=arr.length; i++){
        let changeHappen = false;
        for(let j=0; j<=arr.length-i; j++){          
            if(arr[j] > arr[j+1]){
                changeHappen = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(!changeHappen){
            return arr;
        }
    }
}