package com.company.Controller

uses com.company.Entities.*

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class PolicyController {

  static function Create(scan : Scanner){
    print("Выберите владельца")
    Person.List.each(\elt -> elt.Print())
    var owner = Person.List.get(scan.nextInt())
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
    var car = filteredCars.get(scan.nextInt())
    //Car.List.each(\elt -> elt.Print())
    //var car = Car.List.get(scan.nextInt())

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
    print("Стоимость: " + coverage.Price())
  }

  static function Delete(scan : Scanner){
    print("Выберите полис")
    Policies.List.each(\elt -> elt.Print())
    var policies = Policies.List.get(scan.nextInt())
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
    Policies.List.get(scan.nextInt()).Versions.sortBy(\elt -> elt.StartDate).each(\elt -> elt.Print())
  }

}