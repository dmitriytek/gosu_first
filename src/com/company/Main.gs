package com.company

uses com.company.Entities.*


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

    while (true){
      print("Выберите действие:")
//      print("1. Создать новый контакт")
//      print("2. Создать нового работника")
//      print("3. Создать новую рабочую группу")
//      print("4. Создать новый автомобиль")
//      print("5. Создать новый полис")
//      print("6. Создать новую задачу")


      print("1. Создание")
      print("2. Просмотр")
      print("0. Выход")
      var s = scan.next()

      switch (s){
        case "1":
          print("")
          CreationMenu(scan)
          break
        case "2":
          print("")
          ReadMenu(scan)
          break
        case "0":
          return;
        default:
          continue
      }

    }

  }

  static function CreationMenu(scan : Scanner){
    while (true){

      print("Выберите действие:")
      print("1. Создать новый контакт")
      print("2. Создать нового сотрудника")
      print("3. Создать новую рабочую группу")
      print("4. Создать новый автомобиль")
      print("5. Создать новый полис")
      print("6. Создать новую задачу")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          Person.Create(scan)
          break
        case "2":
          Employee.Create(scan)
          break
        case "3":
          Group.Create(scan)
          break
        case "4":
          Car.Create(scan)
          break
        case "5":
          Policy.Create(scan)
          break
        case "6":
          Task.Create(scan)
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

  static function ReadMenu(scan : Scanner){
    while (true){
      print("Выберите действие:")
      print("1. Вывести все контакты")
      print("2. Вывести всех сотрудников")
      print("3. Вывести все группы")
      print("4. Вывести все авто")
      print("5. Вывести все полисы")
      print("6. Вывести все задачи")
      print("0. Вернуться")

      var s = scan.next()

      switch (s){
        case "1":
          Person.PrintList()
          break
        case "2":
          Employee.PrintList()
          break
        case "3":
          Group.PrintList()
          break
        case "4":
          Car.PrintList()
          break
        case "5":
          Policy.PrintList()
          break
        case "6":
          Task.PrintList()
          break
        case "0":
          return;
        default:
          continue
      }
    }
  }

}