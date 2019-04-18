package com.company.Menus

uses com.company.Entities.*

class ReadMenu {

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Вывести все контакты")
      print("2. Вывести всех сотрудников")
      print("3. Вывести все группы")
      print("4. Вывести все авто")
      print("5. Вывести все полисы")
      print("6. Вывести все версии конкретного полиса")
      print("7. Вывести все задачи")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          Person.PrintList()
          break
        case "2":
          Employee.PrintList()
          break
        case "3":
          Group.PrintList()
          break
        case "4":
          Car.PrintList()
          break
        case "5":
          Policies.PrintList()
          break
        case "6":
          Policies.PrintSpecificList(scan)
          break
        case "7":
          Task.PrintList()
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}