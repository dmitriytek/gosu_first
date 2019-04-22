package com.company.Entities

uses java.time.*

uses com.company.Enum.Category
uses com.company.Utils.*

class Person {
  static var _count : long as readonly Count = 0
  static var _list : List<Person> as List = {}

  var _id : long as readonly Id
  var _name : String as Name
  var _cat : Category as Category
  var _birthday : Date as readonly Birthday
  var _dLDay : LocalDate as LicenseDay

  var _car : Car as Car

  construct(birthday : Date){
    _id = _count
    _birthday = birthday
    _count++;
  }

  function Print(){
    print("------------------------")
    print("id: " + _id)
    print("Имя: " + _name)
    print("Дата рождения: " + _birthday)
    if(_cat == null){
      print("Прав нет")
    } else {
      print("Категрия прав: " + _cat)
      print("Стаж: " + TimeUtil.GetYears(Period.between(LocalDate.now(), _dLDay).getYears()))
    }
  }
}