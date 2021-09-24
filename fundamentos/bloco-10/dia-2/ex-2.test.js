const {users, findUserById, getUserName} = require('./ex-2')

describe('Ex: 3', () => {
  it('find a user with specified ID', async() => {
    const response = await getUserName(1);
    expect(response).toEqual('Mark');
  });
})