package com.company.Entities

uses com.company.Enum.Category

class Employee extends Person{

  var _group : Group as Group

  construct(group : Group){
    super();
    _group = group
  }

  static function Create(scan : Scanner){
    print("Выберите рабочую группу")
    Group.PrintList()
    var emp = new Employee(Group.List.get(scan.nextInt()))
    print("Введите имя")
    emp.Name = scan.next()
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