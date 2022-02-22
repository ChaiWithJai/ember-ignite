import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  students = [
    {
      firstName: 'Kanye',
      lastName: 'West',
      grade: 'Dropout',
      sport: 'Basketball',
    },
    { firstName: 'Tyson', lastName: 'Fury', grade: 'Senior', sport: 'Boxing' },
    {
      firstName: 'Zinedine',
      lastName: 'Zidane',
      grade: 'Freshman',
      sport: 'Football',
    },
    { firstName: 'Mo', lastName: 'Salah', grade: 'Senior', sport: 'Football' },
    { firstName: 'Naomi', lastName: 'Osaka', grade: 'Senior', sport: 'Tennis' },
    { firstName: 'Mary', lastName: 'Kom', grade: 'Senior', sport: 'Boxing' },
    {
      firstName: 'Claressa',
      lastName: 'Shields',
      grade: 'Senior',
      sport: 'Boxing',
    },
  ];
}
