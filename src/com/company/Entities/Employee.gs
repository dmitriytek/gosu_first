package com.company.Entities

uses com.company.Enum.Category

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class Employee extends Person{

  var _group : Group as Group

  construct(birtday : Date, group : Group){
    super(birtday);
    _group = group
  }

  static function Create(scan : Scanner){
    print("Выберите рабочую группу")
    Group.PrintList()
    var group = Group.List.get(scan.nextInt())
    print("Введите имя")
    var name = scan.next()
    print("Ведите дату рождения (dd.MM.yyyy)")
    var dateFormat = new SimpleDateFormat("dd.MM.yyyy")
    var br = new BufferedReader(new InputStreamReader(System.in))
    var emp = new Employee(dateFormat.parse(br.readLine()), group)
    emp.Name = name
    print("Выберите категорию водительских прав: ")
    print("1. A")
    print("2. B")
    print("0 если нет прав")
    var cat = scan.next()
    switch (cat) {
      case "1":
        emp.Category = Category.A
        break
      case "2":
        emp.Category = Category.B
      default:
        break
    }

    print("id: " + emp.Id)
    List.add(emp)

  }

  function Print(){
    print("id: " + this.Id)
    print("Имя: " + this.Name)
    print("Дата рождения: " + this.Birthday)
    if(this.Category == null){
      print("Прав нет")
    }else {
      print("Категрия прав: " + this.Category)
      //print("")
    }
    print("Группа: ")
    _group.Print()
  }
}