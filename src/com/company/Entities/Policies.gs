package com.company.Entities

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Policies {

  static var _count : long as readonly Count = 0
  static var _list : List<Policies> as List = {}

  var _id : long as readonly Id
  var _versions : List<Policy> as Versions = {}
  var _finish : Date as readonly FinishDate

  var _owner : Person as readonly Owner

  construct(
      person : Person,
      date : Date,
      finish : Date,
      coverage : Coverage
  ){
    _id = _count
    var policy = new Policy(person, date, coverage)
    _versions.add(policy)
    _owner = person
    _finish = finish
    List.add(this)
    _count++;
  }

  function Print(){
    print("id: " + _id)
    print("Владелец: " + _owner.Name)
//    var price : double = 0
//    for (cover in _versions.sortBy(\elt -> elt.StartDate).lastWhere(\elt -> elt.StartDate < Date.Now).Coverages){
//      price+=cover.Price()
//    }
    print("Дата окончания: " + _finish)
    print("Стоимость: " + Price())
  }

  function GetVersions(){
    _versions.sortBy(\elt -> elt.StartDate).each(\elt -> elt.Print())
  }

  function Price() : double{
    var sortedVersions = _versions.sortBy(\elt -> elt.StartDate)
    var policyTerm : double = _finish.Time - sortedVersions.first().StartDate.Time
    //print("policyTerm: " + policyTerm)
    var price : double
    if(sortedVersions.size() > 1) {
      for (version in sortedVersions) {
        var i = sortedVersions.indexOf(version)
        if (i < sortedVersions.size() - 1) {
          var term : double = sortedVersions.get(i + 1).StartDate.Time - version.StartDate.Time
          //print("term: " + term + " multiplier: " + (term/policyTerm))
          price += (version.Price() * (term/policyTerm))
        }else{
          var term : double = _finish.Time - version.StartDate.Time
          price += (version.Price() * (term/policyTerm))
        }
      }
    }else {
      price = sortedVersions.first().Price()
    }

    return price
  }
}