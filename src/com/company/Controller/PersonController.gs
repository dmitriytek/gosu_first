package com.company.Controller

uses com.company.Entities.*
uses com.company.Enum.Category

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class PersonController {

  static function Create(scan : Scanner){
    print("Введите имя")
    var name = scan.next()
    print("Ведите дату рождения (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var person = new Person(dateFormat.parse(br.readLine()))
    person.Name = name
    print("Выберите категорию водительских прав: ")
    print("1. A")
    print("2. B")
    print("0 если нет прав")
    var cat = scan.next()
    switch (cat) {
      case "1":
        person.Category = Category.A
        break
      case "2":
        person.Category = Category.B
      default:
        break
    }
    print("id: " + person.Id)
    Person.List.add(person)
    print("Создать ещё? (y|n)")
    switch (scan.next()){
      case "y":
        Create(scan)
        break
      default:
        break
    }
  }

  static function Delete(scan : Scanner){
    print("Выберите контакт для удаления")
    var persons = Person.List.where(\elt -> elt.Class != Employee).copy()
    persons.each(\elt -> elt.Print())
    Person.List.remove(persons.get(scan.nextInt()))

    print("Удалить ещё? (y|n)")
    switch (scan.next()){
      case "y":
        Delete(scan)
        break
      default:
        break
    }
  }

  static function GetList(){
    Person.List.each(\elt -> elt.Print())
  }

  static function ChangeName(person : Person, scan : Scanner){
    print("Введите новое имя")
    person.Name = scan.nextLine()
  }

  static function ChangeCategory(person : Person, scan : Scanner){
    print("Выберите категорию ('n' если нет прав)")
    Category.AllValues.each(\elt -> print(elt))
    var input  = scan.next()
    if (input == "n"){
      person.Category = null
      return;
    }
    person.Category = Category.AllValues.get(Integer.parseInt(input))
  }
}