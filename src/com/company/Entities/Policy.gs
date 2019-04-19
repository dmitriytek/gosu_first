package com.company.Entities

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Policy {

  static var _count : long = 0
  static var _list : List<Policy> as List = {}

  var _id : long as readonly Id
  var _created : Date as readonly Created
  var _startDate : Date as readonly StartDate
  //var _price : double as readonly Price

  var _owner : Person as readonly Owner

  var _cars : List<Car> as readonly Cars = {}


  construct(car : Car, person : Person, date : Date){
    _id = _count
    _owner = person
    _cars.add(new Car(car, _cars.size()))
    _startDate = date
    _created = Date.Now
    _list.add(this)
    _count++;
  }

  construct(policy : Policy, car : Car, date : Date){
    _id = _count
    _owner = policy.Owner
    _cars.clear()
    _cars.add(new Car(car, _cars.size()))
    _startDate = date
    _created = Date.Now
    _list.add(this)
    _count++;
  }

  construct(policy : Policy, cars : List<Car>, date : Date){
    _id = _count
    _owner = policy.Owner
    _cars.clear()
    _cars.addAll(cars)
    _startDate = date
    _created = Date.Now
    _list.add(this)
    _count++;
  }

  static function Create(scan : Scanner){
    print("Выберите владельца")
    Person.PrintList()
    var owner = Person.List.get(scan.nextInt())
    print("Выберите автомобиль")
    Car.PrintList()
    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var policy = new Policy(Car.List.get(scan.nextInt()), owner, dateFormat.parse(br.readLine()))
    List.add(policy)

    print("id: " + policy.Id)
    print("Полис: ")
    policy.Print()
  }

  function Print(){
    print("id: " + _id)
    print("Дата создания: " + _created)
    print("Дата вступления в силу: " + _startDate)
    print("Автомобили:")
    for (car in _cars){
      car.Print()
    }
    var price : double = 0
    for (car in _cars){
      if (car.HasGlass){
        price += (50 * car.Volume)
      }
      if (car.HasLights){
        price += (100 * car.Volume)
      }
      if (car.HasStealing){
        price += (150 * car.Volume)
      }
    }
    print("Стоимость: " + price)
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  function PrintCars(){
    for (car in Cars){
      car.Print()
    }
  }


}