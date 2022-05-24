export interface IFooCepAPI {
    getAddressByCEP (cep: string, number: number): Promise<string>;
    getCepByAddress (cep: string, number: number): Promise<string>;
  }