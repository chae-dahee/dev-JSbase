//직원 정보

class Employee {
  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {}

  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      `이름 : ${this._empName}, 나이 : ${this._age}, 직업: ${this._empJob}`
    );
  };
}

let employee1 = new Employee("dah", 11, "backsoo");
employee1.empName = "datdaradanadat";
employee1.printEmp();
