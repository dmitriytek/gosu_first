package com.company

uses com.company.Entities.*
uses com.company.Menus.*


class Main {
  static function main(args : String[]){

    var scan = new Scanner(System.in)
    var generalMenu = new GeneralMenu()
    generalMenu.Start(scan)

  }

}