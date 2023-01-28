function detectCycle(head) {
  if (!head || !head.next || !head.next.next) return null;

  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    slow = slow.next;

    if (!fast.next || !fast.next.next) return null;
    fast = fast.next.next;
  }

  fast = head;

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
}
