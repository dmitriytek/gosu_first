package com.company.Entities

uses com.company.Enum.Manufacturer

class Car {
  static var _count : long = 0
  static var _list : List<Car> as List = {}

  var _id : long
  var _name : String as Name
  var _vin : String as Vin
  var _volume : double as Volume

  var _manufacturer : Manufacturer as readonly Manufacturer
  var _policy : Policy as Policy

  construct(vin : String, vol : double, man : Manufacturer){
    _id = _count
    _manufacturer = man
    _vin = vin
    _volume = vol
    _count++;
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
    if (_policy != null){

    }
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }
}