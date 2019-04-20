package com.company.Menus

uses com.company.Entities.*

class CarMenu {

  function Start(scan : Scanner){
    while (true) {
      print("")
      print("Количество автомобилей: " + Car.List.size())
      print("Выберите действия")
      print("1. Создать автомобиль")
      print("2. Удалить автомобиль")
      print("3. Изменить автомобиль")
      print("5. Вывести список автомобилей")
      print("6. Вывести список водителей конкретного автомобиля")
      print("0. Вернуться в главное меню")

      switch (scan.next()){
        case "1":
          break
        case "2":
          break
        case "3":
          print("Выберите автомобиль")
          Car.PrintList()
          var menu = new EditCarMenu(Car.List.get(scan.nextInt()))
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