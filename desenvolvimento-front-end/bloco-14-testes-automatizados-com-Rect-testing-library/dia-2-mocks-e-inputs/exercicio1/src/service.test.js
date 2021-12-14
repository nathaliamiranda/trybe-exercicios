const service = require('./service');
jest.mock("./service");
afterEach(() => jest.clearAllMocks()); 

test('Teste se a função é chamada e quantas vezes é chamada', () => {
  service.randomNumber.mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  service.randomNumber();
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(2);
})

test('Crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
  service.randomNumber.mockImplementationOnce((a, b) => a / b);
  
  expect(service.randomNumber(8,2)).toBe(4);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(8,2);
});

describe('Requesito 3 - testando implementações' , () => {
  test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros. Retorne a multiplicação dos parâmetros', () => {
    service.randomNumber.mockImplementationOnce((a, b, c) => a * b * c);
    
    expect(service.randomNumber(1,2,3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(1,2,3);
  })
  
    test('mockando função que recebe um parâmetro e retorna seu dobro', () => {
      service.randomNumber.mockRestore();
      expect(service.randomNumber).toHaveBeenCalledTimes(0);
  
      service.randomNumber.mockImplementation(a => a * 2);
    
      expect(service.randomNumber(4)).toBe(8);
      expect(service.randomNumber).toHaveBeenCalled();
      expect(service.randomNumber).toHaveBeenCalledTimes(1);
      expect(service.randomNumber).toHaveBeenCalledWith(4);
    
    });
});

describe('Requesito 4 - A - Desenvolva uma nova implementação', () => {
  test('Requesito 4 - mock da função para receber um parâmetro e retornar em lowercase', ()=> {
    service.upperCase.mockImplementation((a) => a.toLowerCase());
  
    expect(service.upperCase('NATHALIA')).toBe('nathalia');

    service.upperCase.mockRestore();

    expect(service.upperCase('nathalia')).toBe('NATHALIA');
  })
  
  test('Requesito 4 - mock da função que recebe um parâmetro e retorna a última letra' , () => {

    service.firstLetra.mockImplementation((a) => a[a.length -1])
  
    expect(service.firstLetra('meninas')).toBe('s');
})

  test('Requisito 4 - recebe 3 parâmetros e os concatena' , () => {
    service.concatString.mockImplementation((a, b, c) => a.concat(b, c));
  
    expect(service.concatString('es', 'ca', 'da')).toBe('escada');
  })
})

describe("Requisito 5 - testando a requisição", () => {
  service.dogsAPI = jest.fn();
  afterEach(service.dogsAPI.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    service.dogsAPI.mockResolvedValue("request sucess");

    service.dogsAPI();
    expect(service.dogsAPI).toHaveBeenCalled();
    expect(service.dogsAPI).toHaveBeenCalledTimes(1);
    await expect(service.dogsAPI()).resolves.toBe("request sucess");
    expect(service.dogsAPI).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    service.dogsAPI.mockRejectedValue("request failed");

    expect(service.dogsAPI).toHaveBeenCalledTimes(0);
    await expect(service.dogsAPI()).rejects.toMatch("request failed");
    expect(service.dogsAPI).toHaveBeenCalledTimes(1);
  });
});