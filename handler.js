"use strict";

const fetch = require('node-fetch');

module.exports.roles = (event, context, callback) => {
  fetch('https://api.glassfrog.com/api/v3/roles', {
    headers: {
      'X-Auth-Token': process.env.API_TOKEN
    }
  })
  .then(response => response.json())
  .then(data => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: data
    };
    callback(null, response);
  });
};
