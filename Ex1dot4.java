public class Ex1dot4 {
  private Ex1dot4() {}

  public static char[] replaceSpaces(char[] input) {
    char[] outroArray = new char[input.length];
    int j = input.length - 1;
    boolean charHappened = false;

    for (int i = input.length - 1; i >= 0; i--) {
      if (input[i] != ' ' && !charHappened) {
        charHappened = true;
      }

      if (!charHappened ) {
        continue;
      }

      if (input[i] == ' ') {
        outroArray[j--] = '0';
        outroArray[j--] = '2';
        outroArray[j--] = '%';
      } else {
        outroArray[j--] = input[i];
      }
    }

    return outroArray;
  }

  public static void main(String[] args) {
    String res = String.valueOf(Ex1dot4.replaceSpaces("Mr John Smith    ".toCharArray()));
    System.out.println(res);
  }
}