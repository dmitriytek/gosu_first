package com.company.Entities

class Policy {

  static var _count : long as readonly Count = 0
  static var _list : List<Policy> as List = {}

  var _id : long as readonly Id
  var _created : Date as readonly Created
  var _startDate : Date as readonly StartDate

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
      price+=coverage.Price()
    }
    print("Стоимость: " + price)
  }

  function PrintCoverages(){
    for (coverage in Coverages){
      coverage.Print()
    }
  }

  function Price() : double{
    var price : double = 0
    for (cover in _coverages){
      price += cover.Price()
    }
    return price
  }
}