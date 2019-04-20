package com.company.Controller

uses com.company.Entities.*
uses com.company.Enum.Manufacturer

class CarController {

  static function Create(scan : Scanner){
    print("Выберите марку")
    Manufacturer.AllValues.each(\elt -> print(elt))
    var man : Manufacturer = Manufacturer.AllValues.get(scan.nextInt())
    print("Введите объем двигателя")
    var vol = scan.nextDouble()
    print("Введите vin")
    var vin = scan.next()
    var car = new Car(vin, vol, man)
    print("id: " + car.Id)
    Car.List.add(car)

    print("Создать ещё? (y|n)")
    switch (scan.next()){
      case "y":
        Create(scan)
        break
      default:
        break
    }
  }

  static function Delete(scan : Scanner){
    print("Выберите автомобиль")
    Car.List.each(\elt -> elt.Print())
    Car.List.remove(scan.nextInt())

    print("Удалить ещё? (y|n)")
    switch (scan.next()){
      case "y":
        Delete(scan)
        break
      default:
        break
    }
  }

  static function GetList(){
    Car.List.each(\elt -> elt.Print())
  }

  static function GetDrivers(scan : Scanner){
    print("Выберите автомобиль")
    Car.List.each(\elt -> elt.Print())
    Car.List.get(scan.nextInt()).Drivers.each(\elt -> elt.Print())
  }
}