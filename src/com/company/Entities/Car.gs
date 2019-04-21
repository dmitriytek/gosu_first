package com.company.Entities

uses com.company.Enum.Manufacturer

class Car {

  static var _count : long as readonly Count = 0
  static var _list : List<Car> as List = {}

  var _id : long as readonly Id
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

  function Print(){
    print("id: " + _id)
    print("Vin: " + _vin)
    print("Марка: " + _manufacturer)
    print("Объем двигателя: " + _volume + "л.")
  }
}