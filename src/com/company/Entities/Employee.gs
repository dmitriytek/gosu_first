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