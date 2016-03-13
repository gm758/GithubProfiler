const Promise = require('es6-promise');
const fetch = require('isomorphic-fetch');

function fetchLanguages(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then((repos) => {
      console.log(repos);
      const repoLanguages = repos.map((repo) => {
        console.log(repo.languages_url);
        return fetch(repo.languages_url);
      });
      return Promise.all(repoLanguages)
    })
    .then((all) => {
      console.log('test');
      console.log(all);
    })
    .catch(() => console.log('caught'))
}

fetchLanguages('gm758');
