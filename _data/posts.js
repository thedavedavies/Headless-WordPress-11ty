const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching data...");

  return fetch(process.env.WORDPRESS_REST_API_URL)
    .then((res) => res.json())
    .then((json) => json);
};
