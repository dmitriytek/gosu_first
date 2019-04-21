package com.company.Menus

uses com.company.Entities.Employee
uses com.company.Controller.EmployeeController

class EditEmployeeMenu {

  var _employee : Employee

  construct(employee : Employee){
    _employee = employee
  }

  function Start(scan : Scanner){
    while (true){
      print("")
      print("Выбран сотрудник:")
      _employee.Print()
      print("----------------------------")
      print("Выберите действие:")
      print("1. Изменить имя")
      print("2. Изменить категорию водительских прав")
      print("3. Изменить группу")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          print("")
          _employee.ChangeName(scan)
          break
        case "2":
          print("")
          _employee.ChangeCategory(scan)
          break
        case "3":
          print("")
          EmployeeController.ChangeGroup(_employee,scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}