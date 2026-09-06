//min length 8 ,min 1 uprcase ltr,min 1 lowercse, min 1 digit, fnctn pswrd strong or weak

function pass(str){
let c=0;
let count=0;
let f=0;
if(str.length>=8){
for(let i=0;i<str.length;i++){
      if((str[i]>="A") && (str[i]<="Z")){
        count++;
      }
      if((str[i]>="a") && (str[i]<="z")){
        f++;
      }
      if(str[i]<="9" && str[i]>="0"){
        c++;
      }
    }

      
}
 if(count>=1 && c>=1 && f>=1){
    return "strong";
 }else{
    
    return "weak";
 }
}

console.log(pass("PASSWORD"));