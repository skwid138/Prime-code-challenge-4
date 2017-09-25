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

function CanopusController( ) {
  // @TODO: Write your controller code in here
  console.log('in CanopusController');
  var vm = this;

  vm.listStudents = function( ) {
    console.log('in getStudents');
    vm.students = canopus;
    console.log('vm.students ', vm.students);
    
  }; // end getStudents
}
