package com.company.Menus

uses com.company.Entities.*

class PolicyMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("Количество полисов: " + Policies.List.size())
      print("Выберите действия")
      print("1. Создать новый полис")
      print("2. Удалить полис")
      print("3. Изменить полис")
      print("4. Вывести список полисов")
      print("5. Вывести список версий конкретного полиса")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          break
        case "2":
          break
        case "3":
          print("Выберите полис")
          Policies.PrintList()
          var menu = new EditPolicyMenu(Policies.List.get(scan.nextInt()))
          menu.Start(scan)
          break
        case "4":
          break
        case "5":
          break
        case "6":
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}