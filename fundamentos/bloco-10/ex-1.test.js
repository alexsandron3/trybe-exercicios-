// sum.js
const {sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3} = require('./ex-1')

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
    });
  });
  describe('EX 3- testa se a função myRemoveWithoutCopy funciona como esperado: ', () => {
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
      const myArray = [1, 2, 3, 4];
      expect(myRemoveWithoutCopy(myArray, 3)).toEqual([1, 2, 4]);
    });
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      const myArray = [1, 2, 3, 4];
      expect(myRemoveWithoutCopy(myArray, 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
      const myArray = [1, 2, 3, 4];
      expect(myRemoveWithoutCopy(myArray, 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('EX 4- ', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(3)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(1)).toBe(1);
    });
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado, ', () => {
      expect(myFizzBuzz('a')).toBe(false);
    });
  });
  describe('EX 5 :', () => {
    it('Compare dois objetos para verificar se são idênticos ou não', () => {
      expect(obj1).toEqual(obj2);
      expect(obj1).not.toEqual(obj3);
    })
  })
});
