package com.company.Entities

class Group {

  static var _count : long = 0
  static var _list : List<Group> as List = {}

  var _id : long
  var _name : String as Name

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

  static function Create(scan : Scanner){
    var group = new Group()
    print("Ведите название группы")
    group.Name = scan.next()
    print("id: " + group.Id)
    List.add(group)
  }

  function Print(){
    print("id: " + _id)
    print("Название: " + _name)
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }
}