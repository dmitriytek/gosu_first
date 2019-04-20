package com.company.Entities

class Group {

  static var _count : long as readonly Count = 0
  static var _list : List<Group> as List = {}

  var _id : long as readonly Id
  var _name : String as Name

  construct(name : String){
    _id = _count
    _name = name
    _count++;
  }

  function Print(){
    print("------------------------")
    print("id: " + _id)
    print("Название: " + _name)
    print("Сотрудников: " + Employee.List.where(\elt -> elt.getClass() == Employee).where(\elt -> (elt as Employee).Group == this))
  }
}