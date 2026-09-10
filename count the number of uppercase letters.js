//Write a function to count the number of uppercase letters
function upper(str){
    let uppercase="";
    let count=0;
    for(i=0;i<str.length;i++){
        uppercase=str.toUpperCase();
        if(str[i]==uppercase[i]){
            count++;
        }
    }
    return count;
}
console.log(upper("PrIYa"));
