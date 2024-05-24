let num = 287152;
//just count the lenth of the num
console.log(num.toString().length);
//now just write a program to calculate the sum of digit

// let newNum = num.toString();
// let sum=0
// for(i=0;i<newNum.length;i++){
//     let result=parseInt(newNum[i]);
//     sum=sum+result;
// }
// console.log(sum);

let sum=0;
let copy=num;

while(copy>0){
    let result=copy%10;
    sum+=result;
    copy=Math.floor(copy/10)
}
console.log(sum);


