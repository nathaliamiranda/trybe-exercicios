// githubApi.test.js
// 1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.


const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
  .then((response) => response.json())
  .then((data) => data.map((repo) => repo.name))
  );
  // implemente seus testes aqui
  describe('testes na API do github' , () => {
    test('Testa verficando se dois repositórios existem na lista', async () => {
      const githubApi = 'https://api.github.com/orgs/tryber/repos';
     const response = await getRepos(githubApi);
    expect.assertions(2);
    expect(response).toContain('sd-01-week4-5-project-todo-list');
    expect(response).toContain('sd-01-week4-5-project-meme-generator');
  });

}
)