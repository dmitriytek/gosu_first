package com.company.Entities

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Policies {

  static var _count : long = 0
  static var _list : List<Policies> as List = {}

  var _id : long as readonly Id
  var _versions : List<Policy> as Versions = {}

  var _owner : Person as readonly Owner

  construct(car : Car, person : Person, date : Date){
    _id = _count
    var policy = new Policy(car, person, date)
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
    var car = Car.List.get(scan.nextInt())

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))

    var policy = new Policies(car, owner, dateFormat.parse(br.readLine()))
    //List.add(policy)

    print("id: " + policy.Id)
    //("Стоимость: " + policy.Versions.get(0).Price)
  }

  function Print(){
    print("id: " + _id)
    print("Владелец: " + _owner.Name)
    //print("Стоимость: " + _versions.last().Price)
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  function ChangeCar(scan : Scanner){
    var versions = this.Versions
    var policy = versions.last()
    policy.Print()

    print("Выберите новый автомобиль")
    Car.PrintList()
    var car  = Car.List.get(scan.nextInt())

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())

    for (version in Versions.where(\elt -> elt.StartDate > startDate)){
      Versions.remove(version)
    }

    var newPolicy = new Policy(policy, car, startDate)

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
    var carCopy = new Car(Car.List.get(scan.nextInt()), policy.Cars.size())
    cars.add(carCopy)

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())

    for (version in Versions.where(\elt -> elt.StartDate > startDate)){
      version.Cars.add(carCopy)
    }

    var newPolicy = new Policy(policy, cars, startDate)
    this.Versions.add(newPolicy)
  }

  function RemoveCar(scan : Scanner){
    var policy = this.Versions.last()
    print("Выберите автомобиль")
    policy.PrintCars()
    var cars = policy.Cars.copy()
    var remCar = cars.get(scan.nextInt())
    cars.remove(remCar)

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())

    for (version in Versions.where(\elt -> elt.StartDate > startDate)){
      version.Cars.remove(remCar)
      if (version.Cars.size() < 1){
        Versions.remove(version)
      }
    }

    var newPolicy = new Policy(policy, cars, startDate)
    this.Versions.add(newPolicy)
  }
}