const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
describe('Ex 1: ', () => {
  it('should return an uppercase string', (done) => {
    uppercase('alexsandro', (result) => {
      try {
        expect(result).toEqual('ALEXSANDRO');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})
