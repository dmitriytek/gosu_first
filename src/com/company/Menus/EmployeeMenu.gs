package com.company.Menus

uses com.company.Entities.*

class EmployeeMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("Количество групп: " + Group.List.size())
      print("Количество сотрудников: " + Employee.List.where(\elt -> elt.getClass() == Employee).size())
      print("Количество задач: " + Task.List.size())
      print("Выберите действия")
      print("1. Создать группу")
      print("2. Удалить группу")
      print("3. Изменить группу")
      print("4. Вывести список групп")
      print("5. Создать сотрудника")
      print("6. Удалить сотрудника")
      print("7. Изменить сотрудника")
      print("8. Вывести список сотрудников")
      print("9. Создать задачу")
      print("10. Удалить задачу")
      print("11. Вывести список задач")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          break
        case "2":
          break
        case "3":
          break
        case "4":
          break
        case "5":
          break
        case "6":
          break
        case "7":
          break
        case "8":
          break
        case "9":
          break
        case "10":
          break
        case "11":
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}