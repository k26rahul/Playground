public class Node {
  private int value;
  private Node next;

  public Node(int value) {
    this.value = value;
  }

  public int getValue() {
    return this.value;
  }

  public void setValue(int value) {
    this.value = value;
  }

  public void setNext(Node node) {
    this.next = node;
  }

  public Node getNext() {
    return this.next;
  }
}
