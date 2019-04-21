package com.company.Menus

uses com.company.Entities.Person

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
          _person.ChangeName(scan)
          break
        case "2":
          print("")
          _person.ChangeCategory(scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }
}