package com.company.Entities

uses com.company.Enum.Manufacturer

class Car {

  static var _count : long = 0
  static var _list : List<Car> as List = {}

  var _id : long
  var _vin : String as Vin
  var _volume : double as Volume

  var _manufacturer : Manufacturer as readonly Manufacturer
  var _policy : Policies as Policies

  var _drivers : List<Person> as Drivers = {}

  construct(
      vin : String,
      vol : double,
      man : Manufacturer
  ){
    _id = _count
    _manufacturer = man
    _vin = vin
    _volume = vol
    _count++;
  }
  construct(car : Car, id : int){
    _id = id
    _manufacturer = car.Manufacturer
    _vin = car.Vin
    _volume = car.Volume
  }

  property get Count() : long{
    return _count
  }
  property get Id() : long{
    return _id
  }

  static function Create(scan : Scanner){
    print("Выберите марку")
    print("1. Мерседес")
    print("2. Рено")
    var s = scan.next()
    var man : Manufacturer
    switch (s) {
      case "1":
        man = MERCEDES
        break
      case "2":
        man = RENO
      default:
        break
    }
    print("Введите объем двигателя")
    var vol = scan.nextDouble()
    print("Введите vin")
    var vin = scan.next()
    var car = new Car(vin, vol, man)
    print("id: " + car.Id)
    List.add(car)
  }

  function Print(){
    print("id: " + _id)
    print("Vin: " + _vin)
    print("Марка: " + _manufacturer)
    print("Объем двигателя: " + _volume + "л.")
    print("Покрытия")
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  function AddDriver(scan : Scanner){
    print("Выберите водителя")
    var candidates : List<Person> = {}
    for (person in Person.List.where(\elt -> elt.Category == A or elt.Category == B)){
      if (!_drivers.contains(person)){
        candidates.add(person)
      }
    }
    if (!candidates.isEmpty()){
      candidates.each(\elt -> elt.Print())
      _drivers.add(candidates.get(scan.nextInt()))

      print("Добавить еще? (y|n)")
      switch (scan.next()){
        case "y":
          AddDriver(scan)
          break
        default:
          return;
      }
    } else{
      print("Нет кандидатов")
    }
  }
}