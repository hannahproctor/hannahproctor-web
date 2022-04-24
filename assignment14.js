//Problem 1
const employees = [
  {
  name: "Sam",
  department: "Tech",
  designation: "Manager",
  salary: 40000,
  raiseEligable: true,
],
}
const employees = [
  {
  name: "Mary",
  department: "Finance",
  designation: "Trainee",
  salary: 18500,
  raiseEligable: true,
],
}
const employees = [
  {
  name: "Bill",
  department: "HR",
  designation: "Executive",
  salary: 21200,
  raiseEligable: false,
],
}

console.log('Problem 1', employees);

//Problem 2

const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
};
console.log('Problem 2', company);

//Problem 3

function addEmployee(employeeName, dept, desig, sal, raiseEligable){
  const newEmployee = {
    name: employeeName,
    department: dept,
    designation: desig,
    salary: sal,
    raiseEligable: raiseEligable,
  };

employees.push(newEmployee);
addEmployee('Anna', 'Tech', 'Executive', 25000, false);

console.log('Problem 3', company);

//Problem 4
let totalSalary = employees[0].salary + employees[1].salary + employees[2].salary + employees[3].salary;
console.log('Problem 4', totalSalary);



//Problem 5
function doRaises(){
  for (let i=0; i <employees.length; i++){
    if (employees[i].raiseEligable){
      employees[i].salary += 1.1;
      employees[i].raiseEligable = false;
    }
  }
}
doRaises();
console.log('Problem 5', employees);

//Problem 6
const workFromHomePpl = ['Anna', 'Sam'];
function setWFH() {
  for (let i=0; i <employees.length; i++){

    console.log(workFromHomePpl.includes(employees[i].name));

  }
}
setWFH();
console.log('Problem 6', employees);
