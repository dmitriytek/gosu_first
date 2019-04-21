package com.company.Menus

uses com.company.Entities.Policies
uses com.company.Controller.PolicyController

class EditPolicyMenu {

  var _policies : Policies

  construct(policies : Policies){
    _policies = policies
  }

  function Start(scan : Scanner){
    while (true){
      print("")
      print("Выбран полис:")
      _policies.Print()
      print("Версий: " + _policies.Versions.size())
      print("----------------------------")
      print("Выберите действие:")
      if (_policies.Versions.last().Coverages.size() == 1) {
        print("1. Заменить автомобиль")
      }
      print("2. Добавить автомобиль")
      if (_policies.Versions.last().Coverages.size() > 1) {
        print("3. Удалить автомобиль")
      }
      print("4. Изменить покрытия")
      print("5. Вывести список версий")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          print("")
          PolicyController.ChangeCar(_policies, scan)
          break
        case "2":
          print("")
          PolicyController.AddCar(_policies, scan)
          break
        case "3":
          print("")
          PolicyController.RemoveCar(_policies, scan)
          break
        case "4":
          print("")
          PolicyController.ChangeCoverage(_policies, scan)
          break
        case "5":
          print("")
          _policies.GetVersions()
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }
}