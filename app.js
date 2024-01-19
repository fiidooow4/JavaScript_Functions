console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count <= 0) {
        console.log("Please provide a non-negative count.");
        return;
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOdds(100)
printOdds(0)


console.log("Exercise 2 Section\n==========\n");
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (!userName || !age) {
        console.log("Please provide both userName and age.");
        return;
    }

    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}


checkAge("ilyas", 23 ); 

console.log("Exercise 3 Section\n==========\n");
function checkQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}


checkQuadrant(1, 2); 

console.log("Exercise 4  Section\n==========\n");
function checkTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 && side2 + side3 <= side1 && side1 + side3 <= side2) {
        if (side1 === side2 && side2 === side3) {
            console.log("Equilateral triangle.");
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
            console.log("Isosceles triangle.");
        } else {
            console.log("Scalene triangle.");
        }
    } else {
        console.log("Invalid triangle.");
    }
}


checkTriangle(2, 2, 2); 


