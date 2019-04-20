package com.company.Controller

uses com.company.Entities.*

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class TaskController {

  static function Create(scan : Scanner){
    if (Group.List.isEmpty()){
      GroupController.Create(scan)
    }
    print("Выберите рабочую группу ('c' чтобы создать новую)")
    Group.List.each(\elt -> elt.Print())
    var s = scan.next()
    var group : Group
    switch (s){
      case "c":
        GroupController.Create(scan)
        group = Group.List.last()
        break
      default:
        group = Group.List.get(Integer.parseInt(s))
        break
    }
    var task = new Task(group)
    print("Введите описание задачи")
    task.Description = scan.next()
    print("Ведите дату завершения задачи")
    var date_task = new SimpleDateFormat("dd.MM.yyyy hh:mm")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var task_time = date_task.parse(br.readLine())
    task.ReadyTime = task_time

    print("id: " + task.Id)
    Task.List.add(task)

    print("Создать ещё? (y|n)")
    switch (scan.next()){
      case "y":
        Create(scan)
        break
      default:
        break
    }
  }

  static function Delete(scan : Scanner){
    print("Выберите задачу")
    Task.List.each(\elt -> elt.Print())
    Task.List.remove(scan.nextInt())

    print("Удалить ещё? (y|n)")
    switch (scan.next()){
      case "y":
        Delete(scan)
        break
      default:
        break
    }
  }

  static function GetList(){
    Task.List.each(\elt -> elt.Print())
  }

}