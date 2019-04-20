package com.company.Entities

class Employee extends Person{

  var _group : Group as Group

  construct(birtday : Date, group : Group){
    super(birtday);
    _group = group
  }

  function Print(){
    print("id: " + this.Id)
    print("Имя: " + this.Name)
    print("Дата рождения: " + this.Birthday)
    if(this.Category == null){
      print("Прав нет")
    }else {
      print("Категрия прав: " + this.Category)
    }
    print("Группа: ")
    _group.Print()
  }
}