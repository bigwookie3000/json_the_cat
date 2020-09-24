const fs = require('fs'); 
const request = require('request');
let userInput = process.argv[2];

const urlAddress = 
`https://api.thecatapi.com/v1/breeds/search?breed_ids =${userInput}`;

request(urlAddress, function(error, response, body) {
  if (error) {
    console.log("URL is not valid", error);
  }  
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(body.description);
  } else {
      console.log("Breed not found!");
    } 
    return error;
});


