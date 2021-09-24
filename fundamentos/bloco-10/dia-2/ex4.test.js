const getRepos = require('./ex-4');

describe('Ex4: ', () => {
  it('should return a list', async() => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    const reposFiltereds = repos.filter((repo) => repo === 'sd-01-week4-5-project-todo-list' || repo === 'sd-01-week4-5-project-meme-generator')
    expect(reposFiltereds).toEqual(['sd-01-week4-5-project-meme-generator','sd-01-week4-5-project-todo-list'])
  });
});