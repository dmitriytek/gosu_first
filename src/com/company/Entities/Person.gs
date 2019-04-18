package com.company.Entities

uses com.company.Enum.Category

class Person {
  static var _count : long = 0
  static var _list : List<Person> as List = {}

  var _id : long
  var _name : String as Name
  var _cat : Category as Category

  var _car : Car as Car

  construct(){
    _id = _count
    _count++;
  }

  property get Count() : long{
    return _count
  }
  property get Id() : long{
    return _id
  }

  function Print(){
    print("id: " + _id)
    print("Имя: " + _name)
    if(_cat == null){
      print("Прав нет")
    }else {
      print("Категрия прав: " + _cat)
      //print("")
    }
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

  static function Create(scan : Scanner){
    var person = new Person()
    print("Введите имя")
    person.Name = scan.next()
    print("Выберите категорию водительских прав: ")
    print("1. A")
    print("2. B")
    print("0 если нет прав")
    var cat = scan.next()
    switch (cat) {
      case "1":
        person.Category = Category.A
        break
      case "2":
        person.Category = Category.B
      default:
        break
    }

    print("id: " + person.Id)
    List.add(person)
  }
}