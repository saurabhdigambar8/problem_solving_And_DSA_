let arr=[2,5,8,22,44,9,1,55]
for(let i=0;i<arr.length;i++){
for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
}
}

console.log(arr[1]);