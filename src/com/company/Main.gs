package com.company

uses com.company.Entities.*
uses com.company.Menus.*


class Main {
  static function main(args : String[]){
//    print("Hello world!!!")
//    var c = new Task(Date.Now);
//    c.Description = "test";

//    var tasks : List<Task> = {}
//
//    var scan = new Scanner(System.in)
//
//    print("Vvedite kolichestvo zadach")
//    var n = 0
//    try {
//      n = scan.nextInt()
//    } catch (e){
//      n = 0
//    }
//
//    if(n > 0) {
//      for (i in 1..n) {
//        print("vvedite opisanie " + i + " zadachi")
//        tasks.add(Utils.createTask())
//      }
//
//      print("")
//      print("Vivesti spisok zadach? (y|n)")
//      var flag = scan.next()
//      if(flag == "y"){
//        var iter = 1
//        for ( task in tasks){
//          print("Zadacha #" + iter)
//          print("-----------------------------")
//          Utils.printTask(task)
//          iter++
//        }
//      }
//
//      print("")
//      print("Vivesti status zadach ? (y|n)")
//      flag = scan.next()
//      if(flag == "y") {
//        var iter = 1
//        for (task in tasks) {
//          if (task.ReadyTime < Date.Now) {
//            task.Status = READY
//          }
//
//          print("Zadacha #" + iter)
//          print("-----------------------------")
//          Utils.printTask(task)
//          iter++
//        }
//      }
//    }

    /////////////////////////////////////////////////
//    var group = new Group()
//    group.Name = "TestGroup"
//    Group.List.add(group)
//    var task = new Task(Date.Now, 0)
//    Task.List.add(task)
//
//    var employee = new Employee()
//    employee.Name = "test"
//    employee.Group = group
//    Employee.List.add(employee)
//
//    var person = new Person()
//    person.Name = "test2"
//    Person.List.add(person)
//
//    print(Employee.List.get(1).Name)
//    print((Employee.List.get(0) as Employee).Group.Name)
//    print(Person.List.get(0).Name)
//
//    print("task id: " + Task.List.get(0).Id)
//    print("creation date: " + Task.List.get(0).Created)
//    print("group: " + Task.List.get(0).Group.Name)

    ////////////////////////////////////////////

    var scan = new Scanner(System.in)
    var generalMenu = new GeneralMenu()
    generalMenu.Start(scan)
  }

}