
function getNewCar() {
  var car = {
    city: "Toronto",
    passengers: 0,
    gas: 100
  }
  return car;
}

cars = [];

function addCar(cars, newCar) {
cars.push(newCar)
return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
}

car = getNewCar();
addCar(cars, car)
console.log("!!!!")




function pickUpPassenger(car) {

  car["passengers"] +=1;
  car["gas"] -=10;

  console.log("Picked up passenger. Car now has " + car["passengers"] + " passengers.");

}

pickUpPassenger(car);
pickUpPassenger(car);
pickUpPassenger(car);
pickUpPassenger(car);


function getDestination(car) {

  if (car["city"]==="Toronto") {
    return "Mississauga";
  }

  else if (car["city"]==="Mississauga") {
    return "London";
  }
  else if (car["city"]==="London") {
    return "Toronto";
  }

}

getDestination(car);


function fillUpGas(car) {
  oldGas = car["gas"];
  car["gas"] = 100;

  console.log("Filled up to " + getGasDisplay(car["gas"]) + " on gas from " + getGasDisplay(oldGas));

}

function getGasDisplay(gasAmount) {
  return gasAmount;
}

fillUpGas(car);


function drive(car, cityDistance) {
  if (car["gas"] < cityDistance) {
    return fillUpGas(car);
  }

  car["city"] = getDestination(car);
  car["gas"] -= cityDistance;

  return "Drove to " + car["city"] + ". Remaining gas: " + getGasDisplay(car["gas"]);

}

drive(car, 30);
// i had to remove the console.log from the getDestination function to get an output
//else, i was getting 'Drove to undefined...'


function dropOffPassengers(car) {


  previousPassengers = car["passengers"]
  car["passengers"] = 0;
    return "Dropped off " + previousPassengers + " passengers.";
  }



dropOffPassengers(car);


function act(car) {
  distanceBetweenCities = 50;

  if (car["gas"] < 20) {
    fillUpGas(car);
  }
  else if (car["passengers"] > 3) {
    pickUpPassenger(car);
  }
  else if (car["gas"] < distanceBetweenCities) {
    fillUpGas(car);
  }

  droveTo = drive(car, distanceBetweenCities);
  passengersDropped = dropOffPassengers(car);

    return droveTo + ". " + passengersDropped;
}

act(car);

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(car)
      console.log("Car " + (i+1) +  ":" + action);
  }
    console.log("---");
}


commandFleet(cars);




function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i <= numDays; i++) {
    newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

addOneCarPerDay(cars, 5);
