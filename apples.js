var apples = 14;
console.log(apples);

console.log("I have " + apples + " apples.");


var materials = ['wood', 'metal', 'stone'];

var words = {
  'elephant': "The world's largest lang mammal",
  'school': "A place of learning",
  'ice cream': "A delicious milk based dessert",
};

console.log(words)


var num = 16;

  if (num > 10) {
    console.log(num + " is greater than 10.");
    }
  else if (num == 10) {
    console.log(num + " is exactly 10.");
  }
  else {
    console.log(num + " must be less than 10.");
  }

  //
  // 10.times do
  //   puts "Doing the same thing over and over."
  // end
  // base = 5
  // 20.times do |num|
  //   puts num + base
  // end
  // total = 0
  // 100.times do |num|
  //   total += num
  // end
  // puts total


  for (var i = 0; i < 11; i++) {
    console.log("Doing the same thing over and over");

  }

  var base = 5;

  for (var i=0; i<21; i++) {
    console.log(i+base)
  }

  var total = 0;

  for (var z=0; z<101; z++) {
    total +=z;
  }

  console.log("This is the total: " + total);



// def hello_world
//   puts "Hello world!"
// end
//
// hello_world
// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount


for (var a = 3, b = 15, height =1; a<b; a++, height++) {
  if (height > 9) {
      console.log("You can get on the rollercoaster!")
  }
  else {
    console.log("You are too short to ride this rollercoaster")
  }
}

var containers = ["purse", "wallet", "backback"]

  for (var i = 0; i < containers.length; i++) {
   console.log(containers[i]);
  }


  function hello_world() {
    console.log("Hello World");
  }

  hello_world()

  function add(firstNum, secondNum) {
    return firstNum + secondNum;
  }



  var amount = add(5, 7)

  console.log(amount);
