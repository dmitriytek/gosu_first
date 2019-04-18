package com.company.Menus

uses com.company.Entities.Policies

class EditPolicyMenu {

  var _policies : Policies

  construct(policies : Policies){
    _policies = policies
  }

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      if (_policies.Versions.last().Cars.size() == 1) {
        print("1. Изменить автомобиль")
      }
      print("2. Добавить автомобиль")
      if (_policies.Versions.last().Cars.size() > 1) {
        print("3. Удалить автомобиль")
      }
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          _policies.ChangeCar(scan)
          break
        case "2":
          _policies.AddCar(scan)
          break
        case "3":
          _policies.RemoveCar(scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }
}