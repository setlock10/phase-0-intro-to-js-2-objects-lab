// Write your solution in this file!
const employee = {
    name:"Steve",
    streetAddress:"123 FY Lane"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };
    newEmployee[key]=value;
    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}


// editEmployee=updateEmployeeWithKeyAndValue(employee,"name","Bob");
//console.log(editEmployee.name);
//destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Bob");
//console.log(employee.name);
//editEmployee=deleteFromEmployeeByKey(employee,"name");
//console.log(editEmployee.name);

destructivelyDeleteFromEmployeeByKey(employee,"name");
console.log(employee.name);
