const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function Employee(employee){
  this.name = employee.name; // Employee.name is the same as the input;
  this.bonusPercentage = getBonusPercentage(employee); //function to be added later;
  this.totalBonus = Number(employee.annualSalary) + (this.bonusPercentage / 100);
  this.totalCompensation = new Number(employee.annualSalary) + Number(this.totalBonus); //replace 0 with bonus;
}

/**
 * Returns a number representing the percentage of the bonus
 * based on the employees rating.
 * @param {number} rating from 1 to 5;
 * @returns {number};
 */
function ratingBonus(rating) {
  // switch to define the categories of bonus levels;
  let percentage;
  rating = Number(rating);
  switch (Number(rating)) {
    case 3:
      percentage = 4;
      break;
    case 4:
      percentage = 6;
      break;
    case 5:
      percentage = 10;
      break;
    default:
      percentage = 0;
      break;
  }
  return percentage;
}

console.log(employees[2].reviewRating);
console.log(ratingBonus(employees[2].reviewRating));
console.log(ratingBonus(4));

/**
 * Evaluates length of employee number and returns longevity bonus if qualified.
 * @param {number} employeeNumber 
 * @returns {number bonus percentage}
 */
function longevityBonus(employeeNumber) {
  
  return employeeNumber.length === 4 ? 5 : 0; //if employeeNumber.length is equal to 4, then it is true, so we send back 5. if it is false we send back 0;

  // let bonus = 0;
  // if (employeeNumber.length === 4) {
  //   bonus = 5;
  // }
  // return bonus;

  // if (employeeNumber.length === 4) {
  //   return 5;
  //   else {
  //     return 0;
  //   }
  // }
}

console.log('Positive longevity bonus, should be 5', longevityBonus('1234'));
console.log('Negative longevity bonus, should be 0', longevityBonus('12345'));

/**
 * Determine if annual salary 
 * @param {*} annualSalary 
 * @returns 
 */
function whoaNelly(annualSalary) {
  return annualSalary > 65000 ? -1 : 0; 
}

function validateBonus(bonus) {
  if (bonus > 13) { //check if bonus more than 13k;
    return 13; //cap at 13;
  }
  else if (bonus < 0) { //check if bonus is less than 0;
    return 0; //dont take away salary;
  }
  else {
    return bonus; //give full bonus;
  }

  // return bonus > 13 ? 13 : (bonus < 0 ? 0 : bonus) <-- Does same thing
} // if bonus is greater than 13, return 13. If bonus if less than 0, return 0. otherwise return bonus.

console.log('15 is over 13 so should return 13', validateBonus(15));
console.log('10 is less than 13 and over 0 so should return 10', validateBonus(10));
console.log('-3 is less than 0 so should return 0', validateBonus(-3));

console.log('Makes more than 65k, should be -1', whoaNelly(66500));
console.log('Makes less than 65k, should be 0', whoaNelly(60000));

console.log(longevityBonus(employees[2].employeeNumber));
console.log(longevityBonus(employees[1].employeeNumber));

console.log( employees );


function getBonusPercentage(employee) {
  let bonus = 0;
  bonus = ratingBonus(employee.reviewRating);
  bonus += longevityBonus(employee.employeeNumber);
  bonus += whoaNelly(employee.annualSalary);
  bonus = validateBonus(bonus);
  console.log(`Bonus amount for ${employee.name}`, bonus);
  return bonus; //anywhere from 0 to 13
  
}

function calculateBonuses(employeeList) {
  let EmployeeList = []; // placeholder for new Employee objects;
  for (const employee of employeeList) { //iterate through the list of employees to create new Employee objects as required;
    const Emp = new Employee(employee); // Instantiating a new Employee object;
    EmployeeList.push(Emp);
    // employeeList.push(new Employee(employee)); this is the same thing as the previous two lines
    console.log('Emplyee Bonus Calculation Result:', Emp);
  }
  return EmployeeList;
}

calculateBonuses(employees);



  // pass through each array item's object
  // consider if each item matches criteria
  // go to the next item and see if they match criteria
  
  // function employeeFunction( employeeObject ) {
  //   let additionalBonus = 0;
  //   let bonus = 0;
  //     if (employeeObject.reviewRating = 3) {
  //     bonus = 0.04;
  //     }
  //     else if (employeeObject.reviewRating = 4) {
  //     bonus = 0.06;
  //     } 
  //     else if (employeeObject.reviewRating = 5) {
  //     bonus = 0.10;
  //     }
  //     console.log(bonus);
      
  //     if (employeeObject.employeeNumber.length = 4) {
  //     additionalBonus = 0.05;
  //     }
  //     else if (employeeObject.annualSalary > 65000) {
  //     additionalBonus -= 0.01;
  //     }
  //     console.log(additionalBonus);
    
  //     let realBonus = bonus + additionalBonus;
    
  //     if (realBonus > 0.13) {
  //     realBonus = 0.13;
  //     }
  //     else if (realBonus < 0) {
  //     realBonus = 0;
  //     }
  //   console.log(realBonus);
  //   const object = {
  //     name: employeeObject.name,
  //     bonusPercentage: realBonus * 100,
  //     totalCompensation: employeeObject.annualSalary + (1 + realBonus)*employeeObject.annualSalary,
  //     totalBonus: (1 + realBonus) *employeeObject.annualSalary
  //     }
  //     return object;
  //   }

// console.log(employeeFunction(employees[0]));
// console.log(employeeFunction(employees[1]));
// console.log(employeeFunction(employees[2]));
// console.log(employeeFunction(employees[3]));
// console.log(employeeFunction(employees[4]));

  