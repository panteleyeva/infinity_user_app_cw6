 1.  //revers the array;
function rev(arr){
    for (let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(rev([1, 2, 3, 4, 5, 6, 7, 8]));



function rev2(arr1){
    let newArr2 = [];
    for(let i = arr1.length - 1; i >= 0; i--){
        newArr2.push(arr1[i]);
    }
    return newArr2;
}
console.log(rev2([1, 2, '3', 4, 'a', null]));