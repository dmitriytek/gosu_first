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

  var _coverages : List<Coverage> as readonly Coverages = {}


  construct(
      person : Person,
      date : Date,
      coverage : Coverage
  ){
    _id = _count
    _owner = person
    _coverages.add(coverage)
    _startDate = date
    _created = Date.Now
    _list.add(this)
    _count++;
  }

  construct(
      policy : Policy,
      date : Date,
      coverage : Coverage
  ){
    _id = _count
    _owner = policy.Owner
    _coverages.clear()
    _coverages.add(coverage)
    _startDate = date
    _created = Date.Now
    _list.add(this)
    _count++;
  }

  construct(policy : Policy, date : Date, coverages : List<Coverage>){
    _id = _count
    _owner = policy.Owner
    _coverages.clear()
    _coverages.addAll(coverages)
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
    var car = Car.List.get(scan.nextInt())
    print("Выберите покрытия")
    print("Стекло (y|n)")
    var glass : boolean
    switch (scan.next()){
      case "y":
        glass = true
        break
      default:
        glass = false
        break
    }
    print("Фары (y|n)")
    var lights : boolean
    switch (scan.next()){
      case "y":
        lights = true
        break
      default:
        lights = false
        break
    }
    print("Угон (y|n)")
    var st : boolean
    switch (scan.next()){
      case "y":
        st = true
        break
      default:
        st = false
        break
    }
    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var policy = new Policy(owner, dateFormat.parse(br.readLine()), new Coverage(car, glass, lights, st))
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
    for (coverage in Coverages){
      coverage.Print()
    }
    var price : double = 0
    for (coverage in Coverages){
      if (coverage.HasGlass){
        price += (50 * coverage.Car.Volume)
      }
      if (coverage.HasLights){
        price += (100 * coverage.Car.Volume)
      }
      if (coverage.HasStealing){
        price += (150 * coverage.Car.Volume)
      }
    }
    print("Стоимость: " + price)
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  function PrintCoverages(){
    for (coverage in Coverages){
      coverage.Print()
    }
  }


}