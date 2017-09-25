/** ---- DO NOT MODIFY ---- **/
var app = angular.module('canopusApp', []);

var canopus = [
  'Alex',
  'Alicia',
  'Rory',
  'Cam',
  'Carla',
  'Bizz',
  'Emily',
  'Eric',
  'Evan',
  'Greg',
  'Hunter',
  'Jessica',
  'Katie',
  'Kitty',
  'MikeE',
  'MikeP',
  'Nestor',
  'Sam',
  'Sarah',
  'Shara',
  'Xiong'
];

/** ---- CONTROLLER HERE ---- **/
app.controller('CanopusController', CanopusController);

function CanopusController($http) {
  // @TODO: Write your controller code in here
  console.log('in CanopusController');
  var vm = this;

  vm.getStudents = function( ) {
    console.log('in getStudents');
    
  }; // end getStudents
}
