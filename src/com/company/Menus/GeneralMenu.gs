package com.company.Menus

class GeneralMenu {

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Меню контактов")
      print("2. Меню сотрудников")
      print("3. Меню автомобилей")
      print("4. Меню полисов")
      print("0. Выход")
      var s = scan.next()

      switch (s){
        case "1":
          var menu = new PersonMenu()
          menu.Start(scan)
          break
        case "2":
          var menu = new EmployeeMenu()
          menu.Start(scan)
          break
        case "3":
          var menu = new CarMenu()
          menu.Start(scan)
          break
        case "4":
          var menu = new PolicyMenu()
          menu.Start(scan)
          break
        case "0":
          return;
        default:
          continue
      }

    }
  }

}