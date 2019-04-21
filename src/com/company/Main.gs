package com.company

uses com.company.Menus.GeneralMenu


class Main {
  static function main(args : String[]){

    var scan = new Scanner(System.in)
    var generalMenu = new GeneralMenu()
    generalMenu.Start(scan)

  }

}