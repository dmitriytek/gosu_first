package com.company.Menus

uses com.company.Entities.Task
uses com.company.Controller.TaskController

class EditTaskMenu {

  var _task : Task

  construct(task : Task){
    _task = task
  }

  function Start(scan : Scanner){
    while (true){
      print("")
      print("Выбрана задача:")
      _task.Print()
      print("----------------------------")
      print("Выберите действие:")
      print("1. Изменить описание")
      print("2. Назначить сотрудника")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          print("")
          TaskController.ChangeDescription(_task, scan)
          break
        case "2":
          print("")
          TaskController.SetEmployee(_task, scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}