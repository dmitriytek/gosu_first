package com.company.Entities

uses com.company.Enum.Statuses
uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Task {

  static var _count : long = 0
  static var _list : List<Task> as List = {}

  var _id : long
  var _created : Date
  var _readyTime : Date as ReadyTime
  var _description : String as Description
  var _status : Statuses as Status

  var _group : Group as readonly Group
  var _employee : Employee as Employee

  construct(group : Group){
    _id = _count
    _group = group
    _created = Date.Now
    _count++;
  }

  property get Created() : Date{
    return _created
  }
  property get Count() : long{
    return _count
  }
  property get Id() : long{
    return _id
  }

  static function Create(scan : Scanner){
    print("Выберите группу сотрудников")
    Group.PrintList()
    var task = new Task(Group.List.get(scan.nextInt()))
    print("Введите описание задачи")
    task.Description = scan.next()
    print("Ведите дату завершения задачи")
    var date_task = new SimpleDateFormat("dd.MM.yyyy hh:mm")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var task_time = date_task.parse(br.readLine())
    task.ReadyTime = task_time

    print("id: " + task.Id)
    List.add(task)
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
  }

  static function PrintList(){
    for (obj in List){
      obj.Print()
    }
  }

}