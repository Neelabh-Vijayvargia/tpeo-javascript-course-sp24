// constructor for car:

function car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

// three types of cars

AcuraIntegra = new car("Acura", 2024, "Gray", 33)
TeslaModelY = new car('Tesla', 2023, 'Red', 88)
Mustang = new car('Ford', 2016, 'Gray', 16)

console.log(AcuraIntegra.mpg)
console.log(TeslaModelY.mpg)
console.log(Mustang.mpg)


// parent class Vehicle

function vehicle(car) {
    this.car = car
}

AcuraIntegraV = new vehicle(AcuraIntegra)
TeslaModelYV = new vehicle(TeslaModelY)
MustangV = new vehicle(Mustang)

console.log(AcuraIntegraV.car.mpg)
console.log(TeslaModelYV.car.mpg)
console.log(MustangV.car.mpg)
