
const number = parseInt(prompt("Please enter a number"), 10);


if (isNaN(number)) {
    console.log("Invalid input! Please enter a valid number.");
} else {
    
    const rangeLimit = 10;

   
    console.log(`Multiplication table for ${number} is:`);
    for (let i = 1; i <= rangeLimit; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

