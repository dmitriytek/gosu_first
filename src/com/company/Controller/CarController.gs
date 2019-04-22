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
    Car.List.remove(Car.List.firstWhere(\elt -> elt.Id == scan.nextLong()))

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
    Car.List.firstWhere(\elt -> elt.Id == scan.nextLong()).Drivers.each(\elt -> elt.Print())
  }

  static function AddDriver(car: Car, scan : Scanner){
    print("Выберите водителя")
    var candidates : List<Person> = {}
    for (person in Person.List.where(\elt -> elt.Category == A or elt.Category == B)){
      if (!car.Drivers.contains(person)){
        candidates.add(person)
      }
    }
    if (!candidates.isEmpty()){
      candidates.each(\elt -> elt.Print())
      car.Drivers.add(candidates.firstWhere(\elt -> elt.Id == scan.nextLong()))

      print("Добавить еще? (y|n)")
      switch (scan.next()){
        case "y":
          AddDriver(car, scan)
          break
        default:
          return;
      }
    } else{
      print("Нет кандидатов")
    }
  }

  static function RemoveDriver(car : Car, scan : Scanner){
    if (car.Drivers.isEmpty()){print("Нет водителей") return;}
    print("Выберите водителя")
    car.Drivers.each(\elt -> elt.Print())
    car.Drivers.remove(car.Drivers.firstWhere(\elt -> elt.Id == scan.nextLong()))

    if(!car.Drivers.isEmpty()){
      print("Удалить еще? (y|n)")
      switch (scan.next()){
        case "y":
          RemoveDriver(car, scan)
          break
        default:
          return;
      }
    }
  }
}