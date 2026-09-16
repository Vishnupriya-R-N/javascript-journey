let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // Print stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        process.stdout.write("*");
    }

    console.log();
}

// Lower half
for (let i = n - 1; i >= 1; i--) {

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // Print stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        process.stdout.write("*");
    }

    console.log();
}
