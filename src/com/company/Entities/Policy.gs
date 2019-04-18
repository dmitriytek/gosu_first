package com.company.Entities

class Policy {

  static var _count : long = 0
  static var _list : List<Policy> as List = {}

  var _id : long as readonly Id
  var _created : Date as readonly StartDate
  var _price : double as readonly Price


  construct(car : Car){
    _id = _count
    _price = 0
    if (car.HasGlass){
      _price += (50 * car.Volume)
    }
    if (car.HasLights){
      _price += (100 * car.Volume)
    }
    if (car.HasStealing){
      _price += (150 * car.Volume)
    }
    _created = Date.Now
    car.Policy = this
    _count++;
  }

  static function Create(scan : Scanner){
    print("Выберите автомобиль")
    Car.PrintList()
    var policy = new Policy(Car.List.get(scan.nextInt()))
    List.add(policy)

    print("id: " + policy.Id)
    print("Стоимость: " + policy.Price)
  }

  function Print(){
    print("id: " + _id)
    print("Дата выдачи: " + _created)
    print("Стоимость: " + _price)
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }


}