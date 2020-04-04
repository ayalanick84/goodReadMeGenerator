// TODO: import axios module
const axios = require("axios");
// TODO: use dotenv module to get environmental variables if necessary
const dotnv = require("dotenv");
// TODO: do not make a commit with GitHub api key or access token in any file. (Only applies if your app uses access tokens or api keys.)

const api = {
  // TODO: Return promise for GitHub api response to get user data.
  // (Hint: Use axios to send a get request and return the promise created by calling axios.get())
  getUser(username) {
    const url = `https://api.github.com/users/${username}`
    
    // use axios to fetch GitHub user data
    return axios.get(url)
    // .then(response => console.log(response.data));
    // return api.getUser(username);
  }
};
module.exports = api;
