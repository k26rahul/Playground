class Employee:
  total_employees = 0
  total_salary = 0

  def __init__(self, name="", designation="", salary=0):
    self.name = name
    self.designation = designation
    self.salary = salary
    Employee.total_employees += 1
    Employee.total_salary += salary

  def getdata(self):
    self.name = input("Enter employee name: ")
    self.designation = input("Enter employee designation: ")
    self.salary = float(input("Enter employee salary: "))
    Employee.total_salary += self.salary

  @staticmethod
  def average():
    if Employee.total_employees == 0:
      return 0
    return Employee.total_salary / Employee.total_employees

  def display(self):
    print(f"Name: {self.name}")
    print(f"Designation: {self.designation}")
    print(f"Salary: {self.salary}")


if __name__ == "__main__":
  num_of_employees = int(input("Enter no. of employees: "))
  employees = []

  for _ in range(num_of_employees):
    emp = Employee()
    emp.getdata()
    employees.append(emp)

  for emp in employees:
    emp.display()

  print(f"Average salary: {Employee.average()}")
