package com.company.Entities

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Policies {

  static var _count : long as readonly Count = 0
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

  function Print(){
    print("id: " + _id)
    print("Владелец: " + _owner.Name)
    var price : double = 0
    for (cover in _versions.sortBy(\elt -> elt.StartDate).lastWhere(\elt -> elt.StartDate < Date.Now).Coverages){
      price+=cover.Price()
    }
    print("Стоимость: " + price)
  }

  function GetVersions(){
    _versions.sortBy(\elt -> elt.StartDate).each(\elt -> elt.Print())
  }
}