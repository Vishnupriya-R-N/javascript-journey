let str = "()[]{}";
let stack = [];
let valid = true;
for (let i = 0; i < str.length; i++) {
let char = str[i];
    if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
    } else {
        let last = stack.pop();
        if (
            (char === ")" && last !== "(") ||
            (char === "]" && last !== "[") ||
            (char === "}" && last !== "{")
        ) {
            valid = false;
            break;
        }
    }
}
if (stack.length !== 0) {
    valid = false;
}
console.log(valid);
