//! Question : Hash Tag Generator

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//* The input string should be converted to a hash tag formate, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the string is empty or contains only whitespaces , the function should return false

//* Otherwise, the function should return the generated hash tag prefixed with #.
//! Examples : #MyNameIsAnuj;

// Answer 01 :

const hashTag = (str) =>{
    if(str.trim().length === 0 || str.trim().length > 280)
    {
        return false;
    }
   let words = str.split(" ");

  let strr =  words.map((curr) =>curr.replace(curr[0] , curr[0].toUpperCase()));
  strr = `#${strr.join("")}`;
  return strr;
   
}

let hasttashname = hashTag('my name is anuj pratap singh');
console.log(hasttashname);

// Answer 2 
const hashGenerator = (str) => {
  if(str.trim().length === 0 || str.trim().length > 280)
  {
      return false;
  }
  let arr = str.split(" ");
  // console.log(arr);
  
  arr = arr.map((element)=>  element.charAt(0).toUpperCase() + element.slice(1));
  arr = `#${arr.join("")}`
  return arr
  
}

let hashValue = hashGenerator("Tum pass aaye yun muskuraye");
console.log(hashValue);
