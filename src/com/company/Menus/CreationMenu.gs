package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class CreationMenu {

  function Start(scan : Scanner){
    while (true){

      print("Выберите действие:")
      print("1. Создать новый контакт")
      print("2. Создать нового сотрудника")
      print("3. Создать новую рабочую группу")
      print("4. Создать новый автомобиль")
      print("5. Создать новый полис")
      print("6. Создать новую задачу")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          PersonController.Create(scan)
          break
        case "2":
          Employee.Create(scan)
          break
        case "3":
          Group.Create(scan)
          break
        case "4":
          Car.Create(scan)
          break
        case "5":
          Policies.Create(scan)
          break
        case "6":
          Task.Create(scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}