// import java.util.Arrays;

// int[] numbers = { 10, 20, 30, 40, 50 };
// int[] numbers = new int[3];
// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// System.out.println(numbers);
// System.out.println(numbers.length);
// System.out.println(Arrays.toString(numbers));

public class HelloWorld {
  public static void main(String[] args) {
    var numbers = new Array(3);
    numbers.insert(10);
    numbers.insert(20);
    numbers.insert(30);
    numbers.insert(40);
    numbers.insert(50);
    numbers.insert(60);
    // numbers.removeAt(5);
    System.out.println(numbers.indexOf(50));
    System.out.println(numbers.indexOf(60));
    numbers.print();
  }
}