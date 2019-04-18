package com.company.Menus

class GeneralMenu {

  function Start(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Создание")
      print("2. Просмотр")
      print("3. Изменение")
      print("0. Выход")
      var s = scan.next()

      switch (s){
        case "1":
          print("")
          var menu = new CreationMenu()
          menu.Start(scan)
          break
        case "2":
          print("")
          var menu = new ReadMenu()
          menu.Start(scan)
          break
        case "3":
          print("")
          var menu = new EditionMenu()
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