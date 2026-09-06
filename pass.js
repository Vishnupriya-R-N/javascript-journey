//Write a JavaScript function pass(str) to check whether a password is strong or weak.

//A password is considered strong if it satisfies all the following conditions:

//Minimum length is 8 characters.
//Contains at least 1 uppercase letter.
//Contains at least 1 lowercase letter.
//Contains at least 1 digit.

function pass(str) {
    let c = 0;
    let count = 0;
    let f = 0;

    if (str.length >= 8) {
        for (let i = 0; i < str.length; i++) {

            if (str[i] >= "A" && str[i] <= "Z") {
                count++;
            }

            if (str[i] >= "a" && str[i] <= "z") {
                f++;
            }

            if (str[i] >= "0" && str[i] <= "9") {
                c++;
            }
        }

        if (count >= 1 && f >= 1 && c >= 1) {
            return "strong";
        }
    }

    return "weak";
}

console.log(pass("PASSWORD"));
