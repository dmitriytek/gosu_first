package com.company.Menus

uses com.company.Entities.*

class EditCarMenu {

  var _car : Car

  construct(car : Car){
    _car = car
  }

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Добавить водителя")
      print("2. Удалить водителя")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          _car.AddDriver(scan)
          break
        case "2":
          //_car.AddCar(scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}