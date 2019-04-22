package com.company.Controller

uses com.company.Entities.*

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class PolicyController {

  static function Create(scan : Scanner){
    print("Выберите владельца")
    Person.List.each(\elt -> elt.Print())
    var owner = Person.List.firstWhere(\elt -> elt.Id == scan.nextLong())
    print("Выберите автомобиль")
    var carFilter : List<Car> = {}
    for (policies in Policies.List){
      for (version in policies.Versions){
        for (cover in version.Coverages){
          carFilter.add(cover.Car)
        }
      }
    }
    var filteredCars = Car.List.where(\elt -> !carFilter.contains(elt))
    if (filteredCars.isEmpty()){
      print("Нет свободных автомобилей, сначала добавьте новый автомобиль")
      return;
    }

    filteredCars.each(\elt -> elt.Print())
    var car = filteredCars.firstWhere(\elt -> elt.Id == scan.nextLong())

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
    var start = dateFormat.parse(br.readLine())
    var finish = start.addYears(1)

    var coverage = new Coverage(car, glass, lights, st)
    var policy = new Policies(owner, start, finish, coverage)

    print("id: " + policy.Id)
    print("Стоимость: " + coverage.Price())
  }

  static function Delete(scan : Scanner){
    print("Выберите полис")
    Policies.List.each(\elt -> elt.Print())
    var policies = Policies.List.firstWhere(\elt -> elt.Id == scan.nextLong())
    policies.Versions.each(\elt -> Policy.List.remove(elt))
    Policies.List.remove(policies)

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
    Policies.List.each(\elt -> elt.Print())
  }

  static function GetVersions(scan : Scanner){
    print("Выберите полис")
    Policies.List.each(\elt -> elt.Print())
    Policies.List.firstWhere(\elt -> elt.Id == scan.nextLong()).Versions.sortBy(\elt -> elt.StartDate).each(\elt -> elt.Print())
  }

  static function ChangeCar(policies : Policies, scan : Scanner){
    var versions = policies.Versions
    var policy = versions.last()
    policy.Print()

    print("Выберите новый автомобиль")
    Car.List.each(\elt -> elt.Print())
    var car  = Car.List.firstWhere(\elt -> elt.Id == scan.nextLong())

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

    for (version in policies.Versions.where(\elt -> elt.StartDate > startDate)){
      policies.Versions.remove(version)
    }

    var coverage = new Coverage(car, glass, lights, st)
    var newPolicy = new Policy(policy, startDate, coverage)

    versions.add(newPolicy)

    print("------------------------")
    newPolicy.Print()
  }

  static function AddCar(policies: Policies, scan : Scanner){
    print("Выберите автомобиль")
    Car.List.each(\elt -> elt.Print())
    var car = Car.List.firstWhere(\elt -> elt.Id == scan.nextLong())

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


    var policy = policies.Versions.sortBy(\elt -> elt.StartDate).last()
    if (policies.Versions.hasMatch(\elt -> elt.StartDate < startDate)){
      policy = policies.Versions.sortBy(\elt -> elt.StartDate).lastWhere(\elt -> elt.StartDate < startDate)
    }

    var coverages : List<Coverage> = {}
    for (cover in policy.Coverages){
      var newCover = new Coverage(cover)
      coverages.add(newCover)
    }
    coverages.add(coverage)

    for (version in policies.Versions.where(\elt -> elt.StartDate > startDate)){
      version.Coverages.add(coverage)
    }

    var newPolicy = new Policy(policy, startDate, coverages)
    policies.Versions.add(newPolicy)

    print("-------------------------------")
    newPolicy.Print()
  }

  static function RemoveCar(policies : Policies, scan : Scanner){
    var policy = policies.Versions.last()
    print("Выберите автомобиль")
    policy.PrintCoverages()
    var coverages = policy.Coverages.copy()
    var remCar = coverages.get(scan.nextInt())
    coverages.remove(remCar)

    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())

    for (version in policies.Versions.where(\elt -> elt.StartDate > startDate)){
      version.Coverages.remove(remCar)
      if (version.Coverages.size() < 1){
        policies.Versions.remove(version)
      }
    }

    var newPolicy = new Policy(policy, startDate, coverages)
    policies.Versions.add(newPolicy)

    print("-------------------------------")
    newPolicy.Print()
  }

  static function ChangeCoverage(policies : Policies, scan : Scanner){
    print("Введите дату вступления в силу (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var startDate = dateFormat.parse(br.readLine())

    var policy = policies.Versions.sortBy(\elt -> elt.StartDate).lastWhere(\elt -> elt.StartDate < startDate)

    policy.Coverages.each(\elt -> elt.Print())
    var recCoverage = policy.Coverages.get(scan.nextInt())
    var car = recCoverage.Car

    var coverages : List<Coverage> = {}
    for (cover in policy.Coverages){
      if (cover.Car != car){
        var newCover = new Coverage(cover)
        coverages.add(newCover)
      }
    }

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
    coverages.add(coverage)

    for (version in policies.Versions.sortBy(\elt -> elt.StartDate).where(\elt -> elt.StartDate > startDate)) {
      var next = version.Coverages.firstWhere(\elt -> elt.Car == car)
      if (recCoverage != coverage) {
        if ((next.HasGlass != recCoverage.HasGlass) and (next.HasGlass != coverage.HasGlass) and (next.HasGlass != true)) {
          next.HasGlass = coverage.HasGlass
        }
        if ((next.HasLights != recCoverage.HasLights) and (next.HasLights != coverage.HasLights) and (next.HasLights != true)) {
          next.HasLights = coverage.HasLights
        }
        if ((next.HasStealing != recCoverage.HasStealing) and (next.HasStealing != coverage.HasStealing) and (next.HasStealing != true)) {
          next.HasStealing = coverage.HasStealing
        }
      }
    }

    var newPolicy = new Policy(policy, startDate, coverages)
    policies.Versions.add(newPolicy)

    print("-------------------------------")
    newPolicy.Print()
  }
}