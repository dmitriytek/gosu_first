package com.company.Utils

class TimeUtil {

  static function GetYears(years : int) : String{
    if ((years > 4) and (years < 21)){
      return years + " лет"
    }else if ((years % 10) == 1){
      return years + " год"
    }else if (((years % 10) > 1) and ((years % 10) < 5)){
      return years + " года"
    }else{
      return years + " лет"
    }
  }

}