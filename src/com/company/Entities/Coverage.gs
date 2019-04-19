package com.company.Entities

class Coverage {
  static final var _glass : int as Glass = 2000
  static final var _lights : int as Lights = 3000
  static final var _stealing : int as Stealing = 4000

  var _hasGlass : boolean as HasGlass
  var _hasLights : boolean as HasLights
  var _hasStealing : boolean as HasStealing

  var _car : Car as readonly Car

  construct(
      car : Car,
      glass : boolean,
      lights : boolean,
      st: boolean
  ){
    _car = car
    _hasGlass = glass
    _hasLights = lights
    _hasStealing = st
  }

  construct(coverage : Coverage){
    _car = coverage.Car
    _hasGlass = coverage.HasGlass
    _hasLights = coverage.HasLights
    _hasStealing = coverage.HasStealing
  }

  function Print(){
    _car.Print()
    print("Покрытия:")
    if (_hasGlass) print("\t Стекло")
    if (_hasLights) print("\t Фары")
    if (_hasStealing) print("\t Угон")
  }

}