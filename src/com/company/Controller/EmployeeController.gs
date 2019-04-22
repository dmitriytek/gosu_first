package com.company.Controller

uses com.company.Entities.*
uses com.company.Enum.Category

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat
uses java.time.LocalDate
uses java.time.format.DateTimeFormatter

class EmployeeController {

  static function Create(scan : Scanner){
    if (Group.List.isEmpty()){
      GroupController.Create(scan)
    }
    print("Выберите рабочую группу ('c' чтобы создать новую)")
    Group.List.each(\elt -> elt.Print())
    var s = scan.next()
    var group : Group
    switch (s){
      case "c":
        GroupController.Create(scan)
        group = Group.List.last()
        break
      default:
        group = Group.List.firstWhere(\elt -> elt.Id == scan.nextLong())
        break
    }
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
    if ((cat == "1") or (cat == "2")){
      switch (cat) {
        case "1":
          emp.Category = Category.A
          break
        case "2":
          emp.Category = Category.B
        default:
          break
      }
      print("Введите дату получения прав (dd.mm.yyyy)")
      var formatter : DateTimeFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy")
      emp.LicenseDay = LocalDate.parse(scan.next(), formatter)
    }
    print("id: " + emp.Id)
    Employee.List.add(emp)

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
    print("Выберите сотрудника для удаления")
    var elmployees = Employee.List.where(\elt -> elt.getClass() == Employee).copy() as List<Employee>
    elmployees.each(\elt -> elt.Print())
    Employee.List.remove(elmployees.firstWhere(\elt -> elt.Id == scan.nextLong()))

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
    Employee.List.where(\elt -> elt.getClass() == Employee).each(\elt -> elt.Print())
  }

  static function ChangeGroup(emp : Employee,  scan : Scanner){
    var groups = Group.List.where(\elt -> emp.Group != elt)
    if (groups.isEmpty()){print("Нет других групп") return;}
    print("Выберите группу")
    groups.each(\elt -> elt.Print())
    emp.Group = groups.firstWhere(\elt -> elt.Id == scan.nextLong())
    for (task in Task.List.where(\elt -> elt.Employee == emp)){
      task.Employee = null
    }
  }

}