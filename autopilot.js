function getNewCar() {
  var car = {
    city: "Toronto",
    passengers: 0,
    gas: 100
  }
  return car;
}


var cars = [];

function addCar() {
  var new_car = getNewCar();
  cars.push(new_car)

  console.log("Adding new car to fleet. Fleet size is now " + cars.length)
}





function pickUpPassenger() {
  car = getNewCar();

  car["passengers"] +=1;
  car["gas"] -=10;

"Picked up passenger. Car now has #{car[:passengers]} passengers."
  console.log("Picked up passenger. Car now has " + car["passengers"] + " passengers.");

}

pickUpPassenger();


def get_destination(car)
  if car[:city] == 'Toronto'
    'Mississauga'
  elsif car[:city] == 'Mississauga'
    'London'
  elsif car[:city] == 'London'
    'Toronto'
  end
end

def fill_up_gas(car)
  old_gas = car[:gas]
  car[:gas] = 100
  "Filled up to #{ get_gas_display(car[:gas]) } on gas from #{ get_gas_display(old_gas) }."
end
