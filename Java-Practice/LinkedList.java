import java.util.NoSuchElementException;

public class LinkedList {
  private Node first;
  private Node last;

  public void addLast(int item) {
    Node node = new Node(item);

    if (isEmpty())
      first = last = node;
    else {
      last.setNext(node);
      last = node;
    }
  }

  public void addFirst(int item) {
    Node node = new Node(item);

    if (isEmpty())
      first = last = node;
    else {
      node.setNext(first);
      first = node;
    }
  }

  public int indexOf(int item) {
    int index = 0;
    var current = first;
    while (current != null) {
      if (current.getValue() == item)
        return index;
      current = current.getNext();
      index++;
    }
    return -1;
  }

  public boolean contains(int item) {
    return indexOf(item) != -1;
  }

  public void removeFirst() {
    if (isEmpty())
      throw new NoSuchElementException();
    if (first == last) {
      first = last = null;
      return;
    }
    var second = first.getNext();
    first.setNext(null);
    first = second;
  }

  public void removeLast() {
    if (isEmpty())
      throw new NoSuchElementException();
    if (first == last) {
      first = last = null;
      return;
    }
    var previous = getPrevious(last);
    last = previous;
    previous.setNext(null);
  }

  private Node getPrevious(Node node) {
    var current = first;
    while (current != null) {
      if (current.getNext() == node)
        return current;
      current = current.getNext();
    }
    return null;
  }

  private boolean isEmpty() {
    return first == null;
  }
}
