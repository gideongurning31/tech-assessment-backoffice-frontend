export interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

export const dummyData = [
  {
    username: 'captain.america',
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve.rogers@shield.org',
    birthDate: new Date(-1625123232 * 1000),
    basicSalary: 0,
    status: '01',
    group: 'AVENGERS',
    description: 'The first avenger',
  },
  {
    username: 'the_ironman',
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.co.us',
    birthDate: new Date(12829269 * 1000),
    basicSalary: 9999999,
    status: '01',
    group: 'AVENGERS',
    description: 'CEO of Stark Industries',
  },
  {
    username: 'gothamcity_dark_knight',
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'batman@waynetech.co.us',
    birthDate: new Date(260538069 * 1000),
    basicSalary: 99999999,
    status: '03',
    group: 'JUSTICE LEAGUE',
    description: 'Protector of Gotham City',
  },
  {
    username: 'mulan.hua',
    firstName: 'Hua',
    lastName: 'Mulan',
    email: 'huamulan4456@yahoo.com',
    birthDate: new Date(900848469 * 1000),
    basicSalary: 5000,
    status: '02',
    group: 'DISNEY',
    description: 'LOREM IPSUM DOLOR SIT AMET',
  },
];
