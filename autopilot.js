function getNewCar() {
  var car = {
    city: "Toronto",
    passengers: 0,
    gas: 100
  }
}


var cars = [];
function addCar() {
  var new_car = getNewCar();
  cars.push(new_car)

  console.log("Adding new car to fleet. Fleet size is now " + cars.length)
}




// function pickUpPassenger(car) {
//
//
// }

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
