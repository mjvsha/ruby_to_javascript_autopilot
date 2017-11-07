function getNewCar() {
  var car = {
    city: "Toronto",
    passengers: 0,
    gas: 100
  }
  console.log(car);
}

getNewCar();

var cars = [];
function addCar(new_car) {
  cars.push(new_car)

  console.log("Adding new car to fleet. Fleet size is now " + cars.length)
}



// ef add_car(cars, new_car)
//   cars << new_car
//   "Adding new car to fleet. Fleet size is now #{cars.length}."
// end
//
// def pick_up_passenger(car)
//   car[:passengers] += 1
//   car[:gas] -= 10
//   "Picked up passenger. Car now has #{car[:passengers]} passengers."
// end
//
// def get_destination(car)
//   if car[:city] == 'Toronto'
//     'Mississauga'
//   elsif car[:city] == 'Mississauga'
//     'London'
//   elsif car[:city] == 'London'
//     'Toronto'
//   end
// end
