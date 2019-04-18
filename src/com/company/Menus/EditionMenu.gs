package com.company.Menus

uses com.company.Entities.*

class EditionMenu {

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Изменить полис")
      print("2. Изменить покрытия автомобиля")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          print("Выберите полис")
          Policies.PrintList()
          var menu = new EditPolicyMenu(Policies.List.get(scan.nextInt()))
          menu.Start(scan)
          //Policies.ChangeCar(scan)
          break
        case "2":
          Car.Change(scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}