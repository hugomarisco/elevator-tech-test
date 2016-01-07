describe('Elevator', function() {
  beforeEach(module('ElevatorApp'));

  var $controller;
  var Elevator;

  beforeEach(inject(function(_$controller_, _Elevator_){
    $controller = _$controller_;
    Elevator = _Elevator_;
  }));

  describe('Elevator', function() {
    it('can accept a floor number', function() {
      Elevator.setFloors([-2,-1,0,'A',1,2,3,4], 'A');

      Elevator.queueFloorIndex(0);

      expect(Elevator.nextFloor()).toEqual(0);
    });

    it('can maintain a list of floor numbers', function() {
      var floors = [-2,-1,0,'A',1,2,3,4];

      Elevator.setFloors(floors, 'A');

      expect(Elevator.floors).toEqual(floors);
    });
  });
});
