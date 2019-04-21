package com.company.Entities

uses com.company.Enum.Category

class Person {
  static var _count : long as readonly Count = 0
  static var _list : List<Person> as List = {}

  var _id : long as readonly Id
  var _name : String as Name
  var _cat : Category as Category
  var _birthday : Date as readonly Birthday

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
    }else {
      print("Категрия прав: " + _cat)
    }
  }

  function ChangeName(scan : Scanner){
    print("Введите новое имя")
    _name = scan.nextLine()
  }

  function ChangeCategory(scan : Scanner){
    print("Выберите категорию ('n' если нет прав)")
    Category.AllValues.each(\elt -> print(elt))
    var input  = scan.next()
    if (input == "n"){
      _cat = null
      return;
    }
    _cat = Category.AllValues.get(Integer.parseInt(input))
  }
}