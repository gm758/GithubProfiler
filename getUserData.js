const Promise = require('es6-promise').Promise;
const fetch = require('isomorphic-fetch');
const token = require('./config');

// potential solution to slow ajax requests
const oboe = require('oboe');
// const myHeaders = new Headers();
// myHeaders.append({"Authorization": })

const fetchOptions = {
  headers: {
    Authorization: `token ${token}`,
  },
}

function getLanguageData(url) {
  return fetch(url, fetchOptions)
    .then(response => response.json())
    .then(data => console.log(data))
}

function oboeLanguages(username) {
  return oboe({
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'gm758',
      Authorization: `token ${token}`,
    }
  })
  .node('!.*.languages_url', getLanguageData)
}

oboeLanguages('gm758');
