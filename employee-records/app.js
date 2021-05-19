let employees = []

let john = new EmployeInfo("John", "Developer", "80k")
let jane = new EmployeInfo("Jane", "Designer", "85k")
let bill = new EmployeInfo("Bill", "Project Manager", "100k", "Contract")

function EmployeInfo(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time" 
}

function printEmployeeForm(EmployeInfo){
       employees.push(john)
       employees.push(jane)
       employees.push(bill)

       console.log(employees)
} 

printEmployeeForm()

