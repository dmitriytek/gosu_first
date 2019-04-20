package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class EmployeeMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("МЕНЮ УПРАВЛЕНИЯ СОТРУДНИКАМИ")
      print("Количество групп: " + Group.List.size())
      print("Количество сотрудников: " + Employee.List.where(\elt -> elt.getClass() == Employee).size())
      print("Количество задач: " + Task.List.size())
      print("----------------------------")
      print("Выберите действие")
      print("1. Создать сотрудника")
      print("2. Удалить сотрудника")
      print("3. Изменить сотрудника")
      print("4. Вывести список сотрудников")
      print("5. Перейти в меню управления группами")
      print("6. Перейти в меню управления задачами")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          print("")
          EmployeeController.Create(scan)
          break
        case "2":
          print("")
          EmployeeController.Delete(scan)
          break
        case "3":
          print("")
          break
        case "4":
          print("")
          EmployeeController.GetList()
          break
        case "5":
          var menu = new GroupMenu()
          menu.Start(scan)
          break
        case "6":
          var menu = new TaskMenu()
          menu.Start(scan)
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}