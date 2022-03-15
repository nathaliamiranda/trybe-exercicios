const { expect } = require('chai');

const escrevaArquivo = require('./escrevaArquivo');

describe('Executa a função escrevaArquivo', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', 'trybe');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', 'trybe');

      expect(resposta).to.be.equals('ok');
    });
  });
});