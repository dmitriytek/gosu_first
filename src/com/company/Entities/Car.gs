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
//    print("Введите покрытия:")
//    print("Стекло (y|n)")
//    var glass : boolean
//    switch (scan.next()){
//      case "y":
//        glass = true
//        break
//      default:
//        glass = false
//        break
//    }
//    print("Фары (y|n)")
//    var lights : boolean
//    switch (scan.next()){
//      case "y":
//        lights = true
//        break
//      default:
//        lights = false
//        break
//    }
//    print("Угон (y|n)")
//    var st : boolean
//    switch (scan.next()){
//      case "y":
//        st = true
//        break
//      default:
//        st = false
//        break
//    }
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
//    if (_hasGlass) print("\t Стекло")
//    if (_hasLights) print("\t Фары")
//    if (_hasStealing) print("\t Угон")
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  static function Change(scan : Scanner){
//    print("Выберите автомобиль")
//    PrintList()
//    var car = List.get(scan.nextInt())
//
//    print("Выберите новые покрытия:")
//    print("Стекло (y|n)")
//    var glass : boolean
//    switch (scan.next()){
//      case "y":
//        car.HasGlass = true
//        break
//      default:
//        car.HasGlass = false
//        break
//    }
//    print("Фары (y|n)")
//    var lights : boolean
//    switch (scan.next()){
//      case "y":
//        car.HasLights = true
//        break
//      default:
//        car.HasLights = false
//        break
//    }
//    print("Угон (y|n)")
//    var st : boolean
//    switch (scan.next()){
//      case "y":
//        car.HasStealing = true
//        break
//      default:
//        car.HasStealing = false
//        break
//    }
//
//    for (policies in Policies.List){
//      if (policies.Versions.last().Car == car){
//        var newPolicy = new Policy(policies.Versions.last(), car)
//        policies.Versions.add(newPolicy)
//      }
//    }

  }
}