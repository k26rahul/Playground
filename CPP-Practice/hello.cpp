#include <iostream>
#include <cstdint>
#include <string>
#include <cmath>
using namespace std;

int main()
{
  // const int64_t x = 50;
  // const long long a = 10, b = 20, c = 30;
  // double pi = 3.14;
  // float root2 = 1.4;
  // float fl = 35e4;
  // string name = "Rahul";
  // char letter = 'R';
  // bool isOk = true;
  // cout << pi << isOk << fl;

  // char letter2 = 65;
  // cout << letter2;

  // string greetings = "Hello Strings!";
  // string greetings2 = "Hola boyyyy";
  // cout << greetings + ' ' +  greetings2;
  // cout << greetings.append(" ").append(greetings2);

  // string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // cout << "The length of the txt string is: " << txt.size();

  // string hi = "hello";
  // hi[0] = 'j';
  // cout << hi[0];

  // string fullname;
  // // cin >> fullname;
  // getline(cin, fullname);
  // cout << fullname;

  // cout << sqrt(64 * 64);

  // int time = 20;
  // string result = (time < 18) ? "Good day." : "Good evening.";
  // cout << result;

  // int nums[5] = {1, 2, 3, 4, 5};
  // for (auto &&i : nums)
  // {
  //   cout << i;
  // }

  // string cars[2] = {"Volvo", "BMW"};
  // cars[1] = "TATA";
  // cout << cars[1];

  // string name = 17;

  // int64_t nums[] = {10, 20, 30};
  // cout << sizeof(nums) / sizeof(int64_t);
  // cout << size(nums);

  // string food = "Pizza";
  // // string meal = food;
  // string &meal = food;
  // food[0] = 'G';
  // // meal[0] = 'G';
  // cout << food << meal;

  // string food = "Pizza";

  // // Print the memory address of the variable 'food'
  // cout << "Memory Address of 'food': " << &food << endl;

  // // Print the value stored in the variable 'food'
  // cout << "Value of 'food': " << food << endl;

  // string food = "Pizza";
  // string *address = &food;
  // cout << &food;
  // cout << *address;

  string food = "Pizza";
  string *ptr = &food;

  // Output the value of food (Pizza)
  cout << food << "\n";

  // Output the memory address of food (0x6dfed4)
  cout << &food << "\n";

  // Access the memory address of food and output its value (Pizza)
  cout << *ptr << "\n";

  // Change the value of the pointer
  *ptr = "Hamburger";

  // Output the new value of the pointer (Hamburger)
  cout << *ptr << "\n";

  // Output the new value of the food variable (Hamburger)
  cout << food << "\n";
  return 0;
}