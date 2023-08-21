    //this function creates an array of substrings by separating the string at commas, and trimming the white spaces
    // then creates a new keys in an object
    function stringToSubstrings() {
        const myString = `${strVar}`; // have to convert to string before I can separate the headers
        const substrings = myString.split(",").map((substring) => substring.trim());
        substrings.forEach((substring)=> console.log(substring));
    }