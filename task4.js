// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
    if (!/^[01]+$/.test(binaryString)) {
        throw new Error("Invalid input: The string must be binary (consist of only '0' and '1').");
    }

    let zeroCount = 0;
    for (let char of binaryString) {
        if (char === '0') {
            zeroCount++;
        }
    }

    return zeroCount;
}

const binaryString = "101010001";
console.log("Number of 0's:", count_zero(binaryString)); 
















































 
