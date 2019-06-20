"use strict";

const fetch = require('node-fetch');

module.exports.roles = async event => {
  const url = 'https://api.glassfrog.com/api/v3/roles';
  const response = await fetch(url, {
      headers: {
        'X-Auth-Token': process.env.API_TOKEN
      }
  });
  return await response.json();
};
