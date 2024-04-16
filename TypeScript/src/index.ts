/* let quantity: 50 | 100 = 50;
quantity = 100;
console.log(quantity);
 */

/* function userName(user: { name: string }) {
  return user.name;
}

const user = { name: 'Someone', age: 36 };
userName(user); */

/* type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: (newSize: number) => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag() {},
  resize(newSize) {
    console.log({ newSize });
  },
  // op() {},
};

function myFunc(obj: Draggable & Resizable) {
  obj.resize(1000);
  console.log(obj);
}

myFunc(textBox); */

/* function lbsToKg(weight: number | string): number {
  if (typeof weight === 'number') return weight * 3;
  else return parseInt(weight) * 3;
} */

/* type Employee = {
  readonly id: number;
  name: string;
  phone?: string;
  greet: (message: string) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Someone',
  phone: '9129928811',
  greet(message) {
    console.log(message);
  },
};

// employee.id = 2; readonly
console.log(employee.id);
console.log(employee.phone?.charAt(0)); */

// console.log('hello tsc');

// function calculateTax(income: number, year: string = '2022'): number {
//   console.log({ income, year });
//   console.log(year.charAt(0));
//   if (year == '2024') {
//     console.log('2024');
//   }
//   return 0;
// }

// calculateTax(50_000);
