var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let pointer = head;
  let prevNode = null;
  let count = 1;
  while (pointer.next) {
    prevNode = pointer;
    pointer = pointer.next;
    count++;
  }
  k = k % count;
  if (k === 0) {
    return head;
  }
  prevNode.next = null;
  pointer.next = head;
  head = pointer;
  return rotateRight(head, k - 1);
};
