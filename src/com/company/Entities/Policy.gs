package com.company.Entities

class Policy {

  static var _count : long = 0
  static var _list : List<Policy> as List = {}

  var _id : long as readonly Id
  var _created : Date as readonly StartDate
  var _price : double as readonly Price

  var _owner : Person as readonly Owner

  var _car : Car as readonly Car


  construct(car : Car, person : Person){
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
    _owner = person
    _car = car
    _created = Date.Now
    //car.Policy = this
    _list.add(this)
    _count++;
  }

  construct(policy : Policy, car : Car){
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
    _owner = policy.Owner
    _car = car
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
    var policy = new Policy(Car.List.get(scan.nextInt()), owner)
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