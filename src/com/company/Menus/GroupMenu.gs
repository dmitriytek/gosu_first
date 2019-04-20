package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class GroupMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("МЕНЮ УПРАВЛЕНИЯ ГРУППАМИ")
      print("Количество групп: " + Group.List.size())
      print("Выберите действие")
      print("----------------------------")
      print("1. Создать группу")
      print("2. Удалить группу")
      print("3. Изменить группу")
      print("4. Вывести список групп")
      print("5. Вывести список сотрудников конкретной группы")
      print("6. Вывести список задач конкретной группы")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          print("")
          GroupController.Create(scan)
          break
        case "2":
          print("")
          GroupController.Delete(scan)
          break
        case "3":
          print("")
          break
        case "4":
          print("")
          GroupController.GetList()
          break
        case "5":
          print("")
          GroupController.GetGroupEmployees(scan)
          GroupController.GetList()
          break
        case "6":
          print("")
          GroupController.GetGroupTasks(scan)
          GroupController.GetList()
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}