(function() {
  'use strict';

  var app = angular.module('ElevatorApp', []);

  app.controller('ElevatorCtrl', function($scope, Elevator) {
    $scope.elevator = Elevator;

    $scope.elevator.setFloors([-2,-1,0,'A',1,2,3,4], 'A');

    $scope.queueFloor = function(floorIndex) {
      $scope.elevator.queueFloorIndex(floorIndex);
    };
  });

  app.service('Elevator', function($timeout) {
    this.floors = [];
    this.queue = [];
    this.currentFloor = -1;
    this.state = 'stopped';
    var _this = this;

    this.nextFloor = function() {
      return _this.queue[0];
    };

    this.setFloors = function(floors, currentFloor) {
      this.floors = floors;
      this.currentFloor = Math.max(floors.indexOf(currentFloor), 0);
    };

    this.queueFloorIndex = function(index) {
      if (this.queue.indexOf(index) == -1) {
        this.queue.push(index);

        if (this.queue.length == 1) {
          move();
        }
      }
    };

    function move() {
      getOutPeople(function() {
        if (_this.queue.length > 0) {
          $timeout(function() {
            _this.state = 'moving';

            if (_this.currentFloor < _this.nextFloor()) {
              _this.currentFloor += 1;
            } else {
              _this.currentFloor -= 1;
            }

            move();
          }, 1000);
        } else {
          _this.state = 'stopped';
        }
      });

    }

    function getOutPeople(cb) {
      var queueIndexOfCurrentFloor = _this.queue.indexOf(_this.currentFloor);

      if (queueIndexOfCurrentFloor >= 0) {
        _this.state = 'opened';
        _this.queue.splice(queueIndexOfCurrentFloor, 1);

        $timeout(function() {
          cb();
        }, 1000);
      } else {
        cb();
      }
    }



  });
}());
