let arr=[4,7,22,54,288,3,77,2]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
         if(arr[i]<arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
         }
    }
}
console.log(arr[1]);