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

2. //Arr 1 to 10
 const arr = [];
 for (let i = 0; i <= 10; i++){
     arr[i] = i;
 }
 console.log(arr);

     //Arr 1 to 10 method push
 const arr = [];
 for (let i = 0; i <= 10; i++){
     arr.push(i);
 }
 console.log(arr);

 // Doubled array 0 to 20
 const arr = [];
 for (let i = 0; i <= 10; i++){
     arr[i] = i * 2;
 }
 console.log(arr);
 // doubled array 2 method push
 const arr = [];
 for (let i = 0; i <= 20; i+=2){
     arr.push(i);
 }
 console.log(arr);
 3. //How many vowels in the string(all)
 function vowels(str){
     let count = 0;
     let a = 'oieau';
     str = str.toLowerCase();
     for(let i = 0; i < str.length; i++){
         if(a.includes(str[i]))
             count++
     }
     return count;
 }
 console.log(vowels('I like java script'));
 // method unshift
 const arr = [];
 for (let i = -10; i <= -1; i++){
     arr.unshift(i)
 }
 console.log(arr);