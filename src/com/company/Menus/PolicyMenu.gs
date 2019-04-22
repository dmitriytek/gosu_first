package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class PolicyMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("МЕНЮ УПРАВЛЕНИЯ ПОЛИСАМИ")
      print("Количество полисов: " + Policies.List.size())
      print("----------------------------")
      print("Выберите действия")
      print("1. Создать новый полис")
      print("2. Удалить полис")
      print("3. Изменить полис")
      print("4. Вывести список полисов")
      print("5. Вывести список версий конкретного полиса")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          print("")
          PolicyController.Create(scan)
          break
        case "2":
          print("")
          PolicyController.Delete(scan)
          break
        case "3":
          print("Выберите полис")
          Policies.List.each(\elt -> elt.Print())
          var menu = new EditPolicyMenu(Policies.List.firstWhere(\elt -> elt.Id == scan.nextLong()))
          menu.Start(scan)
          break
        case "4":
          print("")
          PolicyController.GetList()
          break
        case "5":
          print("")
          PolicyController.GetVersions(scan)
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}