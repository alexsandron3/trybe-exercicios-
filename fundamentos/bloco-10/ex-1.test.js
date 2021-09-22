// sum.js
const {sum, myRemove} = require('./ex-1')

describe('Testes do bloco 7.3', () => {
  describe('EX 1- Testa se a função faz a operação correta', () => {
    it('Retorna 9 ao somar 4 com 5', () => {
      expect(sum(4, 5)).toEqual(9);
    });
    it('Retorna 0 ao somar 0 com 0', () => {
      expect(sum(0, 0)).toEqual(0);
    });
    it('Throw error ao passar string como parâmetro', () => {
      expect(() => sum(4, '5')).toThrow(Error);
      expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
  });
  describe('EX 2- Testa se myRemove funciona como esperado: ', () => {
    it ('Verifica se a função remove o número 3 ', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Verifica se a função NÃO remove o número 3', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifica se a função remove o número 5', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
  });
});
