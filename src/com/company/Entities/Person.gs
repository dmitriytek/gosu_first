package com.company.Entities

uses com.company.Enum.Category
uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Person {
  static var _count : long = 0
  static var _list : List<Person> as List = {}

  var _id : long
  var _name : String as Name
  var _cat : Category as Category
  var _birthday : Date as readonly Birthday

  var _car : Car as Car

  construct(birthday : Date){
    _id = _count
    _birthday = birthday
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
    print("Дата рождения: " + _birthday)
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
    print("Введите имя")
    var name = scan.next()
    //person.Name = scan.next()
    print("Ведите дату рождения (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var person = new Person(dateFormat.parse(br.readLine()))
    person.Name = name
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