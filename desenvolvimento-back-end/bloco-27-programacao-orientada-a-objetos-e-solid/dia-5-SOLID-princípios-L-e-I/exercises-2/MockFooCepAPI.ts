import { IFooCepAPI } from "./interfaces/IFooCepAPI";

class MockFooCepAPI implements IFooCepAPI {
    async getAddressByCEP(cep: string, number: number): Promise<string> {
      return `O endereço mockado para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
    }
  
    async getCepByAddress(address: string, number: number): Promise<string> {
      return `O CEP mockado para: "${address}, n°: ${number}" é "CEP baz"`;
    }
  }

  export default MockFooCepAPI;