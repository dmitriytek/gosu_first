package com.company.Menus

uses com.company.Entities.*
uses com.company.Controller.*

class CarMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("МЕНЮ УПРАВЛЕНИЯ АВТОМОБИЛЯМИ")
      print("Количество автомобилей: " + Car.List.size())
      print("----------------------------")
      print("Выберите действие")
      print("1. Создать автомобиль")
      print("2. Удалить автомобиль")
      print("3. Изменить автомобиль")
      print("4. Вывести список автомобилей")
      print("5. Вывести список водителей конкретного автомобиля")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          print("")
          CarController.Create(scan)
          break
        case "2":
          print("")
          CarController.Delete(scan)
          break
        case "3":
          print("")
          print("Выберите автомобиль")
          Car.List.each(\elt -> elt.Print())
          var menu = new EditCarMenu(Car.List.get(scan.nextInt()))
          menu.Start(scan)
          break
        case "4":
          print("")
          CarController.GetList()
          break
        case "5":
          print("")
          CarController.GetDrivers(scan)
          break
        case "0":
          return;
        default:
          break
      }
    }
  }

}