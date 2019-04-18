package com.company.Entities

class Policies {

  static var _count : long = 0
  static var _list : List<Policies> as List = {}

  var _id : long as readonly Id
  var _versions : List<Policy> as Versions = {}

  var _owner : Person as readonly Owner

  construct(car : Car, person : Person){
    _id = _count
    var policy = new Policy(car, person)
    _versions.add(policy)
    _owner = person
    List.add(this)
    _count++;
  }

  static function Create(scan : Scanner){
    print("Выберите владельца")
    Person.PrintList()
    var owner = Person.List.get(scan.nextInt())
    print("Выберите автомобиль")
    Car.PrintList()
    var policy = new Policies(Car.List.get(scan.nextInt()), owner)
    //List.add(policy)

    print("id: " + policy.Id)
    print("Стоимость: " + policy.Versions.get(0).Price)
  }

  function Print(){
    print("id: " + _id)
    print("Владелец: " + _owner.Name)
    print("Стоимость: " + _versions.last().Price)
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  static function ChangeCar(scan : Scanner){
    print("Выберите полис")
    Policies.PrintList()
    var versions = List.get(scan.nextInt()).Versions
    var policy = versions.last()
    policy.Print()

    print("Выберите новый автомобиль")
    Car.PrintList()
    var car  = Car.List.get(scan.nextInt())

    var newPolicy = new Policy(policy, car)

    versions.add(newPolicy)
  }

  static function PrintSpecificList(scan : Scanner){
    print("Выберите полис")
    PrintList()
    var policies = List.get(scan.nextInt())
    for (policy in policies.Versions){
      policy.Print()
    }
  }

  function AddCar(scan : Scanner){
    var policy = this.Versions.last()
    print("Выберите автомобиль")
    Car.PrintList()
    var cars = policy.Cars.copy()
    cars.add(Car.List.get(scan.nextInt()))

    var newPolicy = new Policy(policy, cars)
    this.Versions.add(newPolicy)
  }

  function RemoveCar(scan : Scanner){
    var policy = this.Versions.last()
    print("Выберите автомобиль")
    policy.PrintCars()
    var cars = policy.Cars.copy()
    cars.remove(Car.List.get(scan.nextInt()))

    var newPolicy = new Policy(policy, cars)
    this.Versions.add(newPolicy)
  }
}