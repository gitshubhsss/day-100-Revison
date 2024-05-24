let  arr=[1,2,3,4,5,6,2,3];
//just delete the accurance of 2

let num=2;

// if(arr.includes(num)){
//     arr.splice(arr.indexOf(num),1);
//     console.log(arr);
// }
for(i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(arr.indexOf(arr[i]),1)
    }
}
console.log(arr);