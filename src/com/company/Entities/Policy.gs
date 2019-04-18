package com.company.Entities

class Policy {

  static var _count : long = 0
  static var _list : List<Task> as List = {}

  var _id : long
  var _created : Date as readonly StartDate

  construct(){
    _id = _count
    _created = Date.Now
    _count++;
  }

}