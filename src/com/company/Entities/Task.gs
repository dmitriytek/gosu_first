package com.company.Entities

uses com.company.Enum.Statuses

class Task {

  static var _count : long as readonly Count = 0
  static var _list : List<Task> as List = {}

  var _id : long as readonly Id
  var _created : Date as readonly Created
  var _readyTime : Date as ReadyTime
  var _description : String as Description
  var _status : Statuses as Status

  var _group : Group as readonly Group
  var _employee : Employee as Employee

  construct(group : Group){
    _id = _count
    _group = group
    _status = Statuses.ACTIVE
    _created = Date.Now
    _count++;
  }

  function Print(){
    print("id: " + _id)
    print("Дата постановки задачи: " + _created)
    print("Срок выполнения задачи: " + _readyTime)
    print("Описание: " + _description)
    print("Группа: ")
    _group.Print()
    if(_employee != null){
      print("Исполнитель: ")
      _employee.Print()
    }
    print("Статус" + _status)
  }
}