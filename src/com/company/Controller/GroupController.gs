package com.company.Controller

uses com.company.Entities.*

class GroupController {

  static function Create(scan : Scanner){
    print("Ведите название группы")
    var group = new Group(scan.nextLine())
    print("id: " + group.Id)
    Group.List.add(group)

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
    print("Выберите группу для удаления")
    Group.List.each(\elt -> elt.Print())
    var group = Group.List.get(scan.nextInt())
    Group.List.remove(group)
    Task.List.where(\elt -> elt.Group == group).each(\elt -> Task.List.remove(elt))

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
    Group.List.each(\elt -> elt.Print())
  }

  static function GetGroupEmployees(scan : Scanner){
    print("Выберите группу")
    Group.List.each(\elt -> elt.Print())
    var employees = Employee.List.where(\elt -> elt.getClass() == Employee) as List<Employee>
    employees.where(\elt -> elt.Group == Group.List.get(scan.nextInt())).each(\elt -> elt.Print())
  }

  static function GetGroupTasks(scan : Scanner){
    print("Выберите группу")
    Group.List.each(\elt -> elt.Print())
    Task.List.where(\elt -> elt.Group == Group.List.get(scan.nextInt())).each(\elt -> elt.Print())
  }

  static function AddEmployee(group : Group, scan : Scanner){
    var employees = Employee.List.where(\elt -> elt.getClass() == Employee) as List<Employee>
    var groupless = employees.where(\elt -> elt.Group == null)
    if (groupless.isEmpty()){
      print("нет свободных сотрудников")
    } else {
      print("Выберите сотрудника")
      group.AddEmployee(groupless.get(scan.nextInt()))
    }
  }

  static function RemoveEmployee(group : Group, scan : Scanner){
    var employees = Employee.List.where(\elt -> elt.getClass() == Employee) as List<Employee>
    var inGroup = employees.where(\elt -> elt.Group == group)
    if(inGroup.isEmpty()){ print("данная группа пуста") return;}
    print("Выберите сотрудника")
    inGroup.each(\elt -> elt.Print())
    group.RemoveEmployee(inGroup.get(scan.nextInt()))
  }
}