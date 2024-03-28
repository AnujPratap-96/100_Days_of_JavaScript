//? Longest Word in A String ?

//! Write a Function that takes a string as a input and returns the longest word in the string. If multiple longest words then return the first one.

//* Constraints :::

// 1.The string may contain alphabetic characters , digits , spaces and punctuations.
// 2.The input string is non-empty.
// 3.The string may contain multiple words separate by spaces.


//? Note:
// If the string is empty or contains only whitespaces then returns false.
// The function should ignore leading and trailing whitespaces when determining the longest word.

//! Answer :::

//* First Approach 

const LongestWord = (str) =>{
    if(str.trim().length === 0)
    {
        return "False"
    }
    let words = str.split(" ");
    words = words.sort((a,b)=> b.length - a.length);
   
    return words[0]
    // console.log(words);
    
}

// let long = LongestWord("Anuj Pratap Singh Thakur Katheriya");
// console.log(long);

//* Second and Better Approach 

const LongWord = (str)=>{
    if(str.trim().length === 0)
    {
        return "False"
    }

    let word = str.split(" ");

    return word.reduce((acc , curr) => curr.length > acc.length ? curr : acc , "");
}

let Word = LongWord("Holi Deppawali sab MIkle Manao Yarr");
console.log(Word);

