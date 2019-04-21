package com.company.Menus

uses com.company.Entities.Car
uses com.company.Controller.CarController

class EditCarMenu {

  var _car : Car

  construct(car : Car){
    _car = car
  }

  function Start(scan : Scanner){
    while (true){
      print("")
      print("Выбран автомобиль:")
      _car.Print()
      print("Водителей: " + _car.Drivers.size())
      print("----------------------------")
      print("Выберите действие:")
      print("1. Добавить водителя")
      print("2. Удалить водителя")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          CarController.AddDriver(_car, scan)
          break
        case "2":
          CarController.RemoveDriver(_car, scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}