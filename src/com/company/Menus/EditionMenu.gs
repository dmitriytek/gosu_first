package com.company.Menus

uses com.company.Entities.*

class EditionMenu {

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Изменить автомобиль в полисе")
      print("2. Изменить покрытия автомобиля")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          Policies.ChangeCar(scan)
          break
        case "2":
          Employee.PrintList()
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}