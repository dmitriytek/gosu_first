package com.company.Menus

uses com.company.Entities.Person
uses com.company.Controller.PersonController

class EditPersonMenu {

  var _person : Person

  construct(person : Person){
    _person = person
  }

  function Start(scan : Scanner){
    while (true){
      print("")
      print("Выбран контакт:")
      _person.Print()
      print("----------------------------")
      print("Выберите действие:")
      print("1. Изменить имя")
      print("2. Изменить категорию водительских прав")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          print("")
          PersonController.ChangeName(_person, scan)
          break
        case "2":
          print("")
          PersonController.ChangeCategory(_person, scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }
}