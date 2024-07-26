/**
 * BinaryDecimalConversion
 */
public class BinaryDecimalConversion {

  public static void main(String[] args) {
    // binary to decimal
    String binaryString = "1101";
    int decimalValue = binaryStringToDecimal(binaryString);
    System.out.println("decimal value: " + decimalValue);

    // decimal to binary
    decimalValue = 13;
    binaryString = decimalToBinaryString(decimalValue);
    System.out.println("binary string: " + binaryString);
  }

  public static int binaryStringToDecimal(String binaryString) {
    int decimalValue = 0;
    int length = binaryString.length();

    for (int i = 0; i < length; i++) {
      char bit = binaryString.charAt(i);
      int bitValue = bit - '0';
      int power = length - i - 1;
      decimalValue += bitValue * Math.pow(2, power);
    }

    return decimalValue;
  }

  public static String decimalToBinaryString(int decimalValue) {
    if (decimalValue == 0) {
      return "0";
    }

    StringBuilder binaryString = new StringBuilder();

    while (decimalValue > 0) {
      int remainder = decimalValue % 2;
      binaryString.append(remainder);
      decimalValue /= 2;
    }

    return binaryString.reverse().toString();
  }
}
