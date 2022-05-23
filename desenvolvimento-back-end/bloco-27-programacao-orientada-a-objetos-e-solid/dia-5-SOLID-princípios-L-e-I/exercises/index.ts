class Passenger {
  constructor(public nome:string, public cpf:number) { }
}

class ShippedItem {
  constructor(
    public nome:string, 
    public id:number, 
    public customerID:string,
  ) { }
}

class Flight {
  constructor(public num:number, public passengersOrItem:(Passenger | ShippedItem)[]) { }

  Add(newPassengerOrItem:Passenger | ShippedItem): void {
    this.passengersOrItem.push(newPassengerOrItem); 
  }

  Remove(removedPassengerOrItem: Passenger | ShippedItem): void {
    const index = this.passengersOrItem.indexOf(removedPassengerOrItem, 0);
    if (index > -1) {
      this.passengersOrItem.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome:string, public flights:Flight[]) { }
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }
  AddToFlight(flightNum: number, passengerOrItem: Passenger | ShippedItem): void { }
  RemoveFromFlight(flightNum: number, passengerOrItem: Passenger | ShippedItem): void { }
}

class TravelingCompany extends Company {  
  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }

  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

class ShippingCompany extends Company {  
  AddToFlight(flightNum:number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
    console.log(currentFlight);
  }

  RemoveFromFlight(flightNum: number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(item);
    }
  }
}

const teste = {
nome:'nathalia', 
id: 2, 
customerID: '14121231',
}

const Shipping = new ShippingCompany('Nathalia', []);
Shipping.NewFlight(4);
Shipping.AddToFlight(4, teste);