package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class PersonMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("МЕНЮ УПРАВЛЕНИЯ КОНТАКТАМИ")
      print("Всего контактов: " + Person.List.size())
      print("Выберите действие")
      print("----------------------------")
      print("1. Создать контакт")
      print("2. Удалить контакт")
      print("3. Изменить контакт")
      print("4. Вывести список контактов")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          print("")
          PersonController.Create(scan)
          break
        case "2":
          print("")
          PersonController.Delete(scan)
          break
        case "3":
          print("")
          print("Выберите контакт")
          Person.List.each(\elt -> elt.Print())
          var menu = new EditPersonMenu(Person.List.get(scan.nextInt()))
          menu.Start(scan)
          break
        case "4":
          print("")
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