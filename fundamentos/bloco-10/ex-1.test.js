// sum.js
const sum = require('./ex-1')

describe('Testes do bloco 7.3', () => {
  describe('EX 1- Testa se a função faz a operação correta', () => {
    it('Soma 4 com 5', () => {
      expect(sum(4, 5)).toEqual(9);
    })
    it('Soma 0 com 0', () => {
      expect(sum(0, 0)).toEqual(0);
    })
    it('Passa "5" como parâmetro', () => {
      expect(() => sum(4, '5')).toThrow(Error);
      expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    })
  })
})
