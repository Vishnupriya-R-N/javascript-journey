//Write a function to remove all spaces from a string
function spaces(str){
let newstr="";
for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        newstr+=str[i];
    }
}
return newstr;
}
console.log(spaces("priya r"));
