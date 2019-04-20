package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class PersonMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("Всего контактов: " + Person.List.size())
      print("Выберите действия")
      print("1. Создать контакт")
      print("2. Удалить контакт")
      print("3. Изменить контакт")
      print("4. Вывести список контактов")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          PersonController.Create(scan)
          break
        case "2":
          PersonController.Delete(scan)
          break
        case "3":
          break
        case "4":
          PersonController.GetList()
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}