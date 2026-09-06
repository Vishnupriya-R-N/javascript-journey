//Write a JavaScript function countCharacters(str) that counts and displays:

//Number of uppercase letters
//Number of lowercase letters
//Number of digits
function countCharacters(str) {
    let upper = 0;
    let lower = 0;
    let digit = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= "A" && str[i] <= "Z") {
            upper++;
        }

        if (str[i] >= "a" && str[i] <= "z") {
            lower++;
        }

        if (str[i] >= "0" && str[i] <= "9") {
            digit++;
        }
    }

    console.log("Uppercase:", upper);
    console.log("Lowercase:", lower);
    console.log("Digits:", digit);
}

countCharacters("Hello123");
