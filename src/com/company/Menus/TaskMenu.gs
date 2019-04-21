package com.company.Menus

uses com.company.Controller.*
uses com.company.Entities.*

class TaskMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("МЕНЮ УПРАВЛЕНИЯ ЗАДАЧАМИ")
      print("Количество задач: " + Task.List.size())
      print("Выберите действие")
      print("----------------------------")
      print("1. Создать задачу")
      print("2. Удалить задачу")
      print("3. Изменить задачу")
      print("4. Вывести список задач")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          print("")
          TaskController.Create(scan)
          break
        case "2":
          print("")
          TaskController.Delete(scan)
          break
        case "3":
          print("")
          print("Выберите задачу")
          Task.List.each(\elt -> elt.Print())
          var menu = new EditTaskMenu(Task.List.get(scan.nextInt()))
          menu.Start(scan)
          break
        case "4":
          print("")
          TaskController.GetList()
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}