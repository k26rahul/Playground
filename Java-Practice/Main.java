// import java.util.ArrayList;

// var list = new ArrayList<>();
// list.add(10);
// list.add(20);
// list.add(30);
// list.remove(0);
// System.out.println(list.indexOf(20));
// System.out.println(list);
// System.out.println(list.toArray().toString().length());

// LinkedList<Integer> list = new LinkedList<>();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.addFirst(5);
// list.removeLast();
// System.out.println(list.contains(60));
// System.out.println(list.size());
// System.out.println(list.toArray());
// System.out.println(list);

// import java.util.LinkedList;

public class Main {
  public static void main(String[] args) {
    var list = new LinkedList();
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addFirst(80);
    list.addFirst(90);
    list.addFirst(100);
    list.removeFirst();
    list.removeFirst();
    list.removeLast();
    list.removeLast();
    System.out.println(list.indexOf(90));
    System.out.println(list.contains(100));
  }
}
