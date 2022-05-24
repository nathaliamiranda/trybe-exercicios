import { IVehicle } from "./interfaces/IVehicle";

export class Car implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { 
    throw new Error('veiculo não pode voar');
   }
}

const teste = new Car();

console.log(teste.fly());