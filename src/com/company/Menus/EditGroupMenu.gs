package com.company.Menus

uses com.company.Entities.Employee
uses com.company.Entities.Group
uses com.company.Controller.*

class EditGroupMenu {

  var _group : Group

  construct(group : Group){
    _group = group
  }

  function Start(scan : Scanner){
    while (true){
      print("")
      print("Выбрана группа:")
      _group.Print()
      var employees = Employee.List.where(\elt -> elt.getClass() == Employee) as List<Employee>
      var inGroup = employees.where(\elt -> elt.Group == _group)
      print("----------------------------")
      print("Выберите действие:")
      print("1. Изменить название")
      print("2. Вывести список сотрудников")
      print("3. Добавить сотрудника")
      if (!inGroup.isEmpty()) print("4. Удалить сотрдника")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          print("")
          print("Введите новое название")
          _group.Name = scan.nextLine()
          break
        case "2":
          print("")
          _group.GetEmployeeList()
          break
        case "3":
          print("")
          GroupController.AddEmployee(_group, scan)
          break
        case "4":
          print("")
          GroupController.RemoveEmployee(_group, scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}