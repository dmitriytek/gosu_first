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

  construct(
      person : Person,
      date : Date,
      coverage : Coverage
  ){
    _id = _count
    var policy = new Policy(person, date, coverage)
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

    var coverage = new Coverage(car, glass, lights, st)
    var policy = new Policies(owner, dateFormat.parse(br.readLine()), coverage)

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
    var startDate = dateFormat.parse(br.readLine())

    for (version in Versions.where(\elt -> elt.StartDate > startDate)){
      Versions.remove(version)
    }

    var coverage = new Coverage(car, glass, lights, st)
    var newPolicy = new Policy(policy, startDate, coverage)

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

    var coverage = new Coverage(car, glass, lights, st)

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())


    var policy = this.Versions.sortBy(\elt -> elt.StartDate).last()
    if (this.Versions.hasMatch(\elt -> elt.StartDate < startDate)){
      policy = this.Versions.sortBy(\elt -> elt.StartDate).lastWhere(\elt -> elt.StartDate < startDate)
      print("YEP")
    }

    policy.Print()

    var coverages : List<Coverage> = {}
    for (cover in policy.Coverages){
      var newCover = new Coverage(cover)
      coverages.add(newCover)
    }
    coverages.add(coverage)

    for (version in Versions.where(\elt -> elt.StartDate > startDate)){
      version.Coverages.add(coverage)
    }

    var newPolicy = new Policy(policy, startDate, coverages)
    this.Versions.add(newPolicy)
  }

  function RemoveCar(scan : Scanner){
    var policy = this.Versions.last()
    print("Выберите автомобиль")
    policy.PrintCoverages()
    var coverages = policy.Coverages.copy()
    var remCar = coverages.get(scan.nextInt())
    coverages.remove(remCar)

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())

    for (version in Versions.where(\elt -> elt.StartDate > startDate)){
      version.Coverages.remove(remCar)
      if (version.Coverages.size() < 1){
        Versions.remove(version)
      }
    }

    var newPolicy = new Policy(policy, startDate, coverages)
    this.Versions.add(newPolicy)
  }
}