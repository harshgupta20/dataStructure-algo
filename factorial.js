console.log("working!!!");

// user input
let userNum = 10;

facto(userNum);

function facto(userNum){
    let num=1;
    if(userNum < 0){
        console.log("Input should be great than 0");
        return 0;
    }else{
        for(let i=2; i<=userNum; i++){
            num=num*i;
        }
    }
    console.log(num);
}