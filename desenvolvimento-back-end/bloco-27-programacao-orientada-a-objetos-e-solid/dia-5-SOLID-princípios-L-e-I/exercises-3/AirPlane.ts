import { IVehicle } from "./interfaces/IVehicle";

export class AirPlane implements IVehicle {
  drive(): void { throw new Error('veiculo só pode voar'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

const teste = new AirPlane();

teste.drive();